<template>
    <div class="p-6 align-center mx-auto md:w-2/3 lg:w-2/3">
        <div class="border p-4 mb-3 rounded">
            <input class="w-full px-3 py-2 border rounded-md mb-3" type="text" v-model="hiringManagerName"
                placeholder="Enter Hiring Manager Name">
            <input class="w-full px-3 py-2 border rounded-md mb-3" type="text" v-model="positionTitle"
                placeholder="Enter Position Title">
            <input class="w-full px-3 py-2 border rounded-md mb-3" type="text" v-model="companyName"
                placeholder="Enter Company Name">
        </div>
        <div class="border p-4 relative rounded">
            <p>Dear {{ hiringManagerName }},</p>
            <br />
            <p>
                I'm writing to express interest in the {{ positionTitle }} at {{ companyName }}. With expertise in
                Node.js,
                MongoDB, Vue.js, and React, I'm transitioning to Laravel while nurturing a keen interest in
                DevOps
                and cloud tech.
            </p>
            <p>
                My background in web development equips me to adapt quickly to new technologies. I've worked extensively
                with
                Node.js, MongoDB, Vue.js, and React, and now seek to leverage my skills in Laravel.
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
            <p>{{ information.firstName }} {{ information.middleName }} {{ information.lastName }}.</p>
        </div>
    </div>
</template>

<script setup>
import { information } from "../assets/data.json"
import { ref } from "vue"
const hiringManagerName = ref("")
const positionTitle = ref("")
const companyName = ref("")
</script>