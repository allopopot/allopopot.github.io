<template>
    <div class=""></div>
    <div class="a4page mx-auto border">
        <p>Dear {{ hiringManagerName }}</p>
        <p>
            I'm writing to express interest in the {{ positionTitle }} at {{ companyName }}. With expertise in Node.js,
            MongoDB, Vue.js, and React, I'm transitioning to ASP.NET and C# while nurturing a keen interest in DevOps
            and cloud tech.
        </p>
        <p>
            My background in web development equips me to adapt quickly to new technologies. I've worked extensively
            with
            Node.js, MongoDB, Vue.js, and React, and now seek to leverage my skills in ASP.NET and C#.
        </p>
        <p>
            Furthermore, my curiosity about DevOps and cloud technologies like Docker, Podman, Jenkins, Google Cloud,
            AWS, and Azure fuels my desire to innovate and optimize processes.
        </p>
        <p>
            I'm drawn to the company's commitment to innovation and would be thrilled to contribute to your team's
            success. I'm available for an interview at your earliest convenience.
        </p>
        <p>Sincerely,</p>
        <p>{{ information.firstName }} {{ information.middleName }} {{ information.lastName }}</p>
    </div>
</template>

<script setup>
import { information } from "../assets/data.json"
import { ref } from "vue"
const hiringManagerName = ref("")
const positionTitle = ref("")
const companyName = ref("")
const gender = ["male", "female", "neutral"]
</script>