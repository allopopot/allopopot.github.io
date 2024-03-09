<template>
    <div class="a4page mx-auto p-7 border-2">
        <div class="flex h-auto items-center justify-between">
            <div class="w-8/12">
                <p class="text-5xl font-semibold mb-2 ">{{ information.firstName }} {{ information.middleName }} {{
                    information.lastName }}</p>
                <p class="font-semibold underline mb-2">{{ information.currentDesignation }}</p>
                <p class="font-semibold text-sm italic text-gray-500">{{ information.email }} | {{
                    information.phone.join(" | ") }}</p>
                <p class="font-semibold text-sm italic text-gray-500"></p>
            </div>
            <div class="w-4/12">
                <img class="h-auto w-9/12 ml-auto border-2 rounded-lg" src="/Picture1.jpg" alt="" />
            </div>
        </div>

        <hr class="my-3 border-2  border-gray-300">

        <div>
            <h1 class="text-3xl mb-2">Summary</h1>
            <p v-for="entry of summary" class="text-justify mb-1">{{ entry }}</p>
        </div>

        <hr class="my-3 border-2  border-gray-300">

        <div>
            <h1 class="text-3xl mb-2">Work Experience</h1>
            <div v-for="entry of workExperience.toReversed()" class="mb-2">
                <h2 class="text-xl font-semibold">{{ entry.companyName }} ({{ entry.level }})</h2>
                <p class="italic underline font-semibold text-gray-700 mb-1">{{ entry.start }} - {{ entry.end }} ({{
                    entry.duration }})
                </p>
                <ul class="ml-6 list-disc">
                    <li v-for="description of entry.jobDescription" class="mb-1">{{ description }}</li>
                </ul>
            </div>
        </div>

        <hr class="my-3 border-2  border-gray-300">

    </div>

    <div class="a4page mx-auto p-7 border-2">
        <div>
            <h1 class="text-3xl mb-2">Skills</h1>
            <ul v-for="entry of technologies" class="list-disc ml-6">
                <li>{{ entry }}</li>
            </ul>
        </div>

        <hr class="my-3 border-2  border-gray-300">

        <div></div>
    </div>
</template>

<script setup>
import { information, education, technologies, summary, workExperience, achievements, considerationNote } from "../assets/data.json"
</script>