<template>
    <div class="border p-4 relative rounded">
        <button @click="copyToClipboard($event)" class="border-2 p-1 rounded-md absolute right-[2%] top-[2%]">
            <i class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-link-45deg" viewBox="0 0 16 16">
                    <path
                        d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                    <path
                        d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                </svg>
            </i>
        </button>
        <div ref="contentElement">
            <p>Dear {{ data.hiringManagerName }},</p>
            <br />
            <p>
                I'm writing to express interest in the {{ data.positionTitle }} at {{ data.companyName }}. With
                expertise
                in
                Node.js,
                MongoDB, Vue.js, and React, I'm transitioning to ASP.NET and C# while nurturing a keen interest in
                DevOps
                and cloud tech.
            </p>
            <p>
                My background in web development equips me to adapt quickly to new technologies. I've worked extensively
                with
                Node.js, MongoDB, Vue.js, and React, and now seek to leverage my skills in ASP.NET and C#.
            </p>
            <p>
                Furthermore, my curiosity about DevOps and cloud technologies like Docker, Podman, Jenkins, Google
                Cloud,
                AWS, and Azure fuels my desire to innovate and optimize processes.
            </p>
            <p>
                I'm drawn to the company's commitment into innovation and would be thrilled to contribute to your team's
                success. I'm available for an interview at your earliest convenience.
            </p>
            <br />
            <p>Sincerely,</p>
            <p>{{ data.fullname }}.</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { ref } from "vue"
const data = defineProps({
    hiringManagerName: String,
    positionTitle: String,
    companyName: String,
    fullname: String
})

const contentElement = ref(null)

async function copyToClipboard(event) {
    event.preventDefault()
    const text = contentElement.value.textContent
    try {
        await navigator.clipboard.writeText(text);
        alert("Copied to Clipboard")
    } catch (err) {
        alert("Failed to Copy to Clipboard")
    }

}
</script>