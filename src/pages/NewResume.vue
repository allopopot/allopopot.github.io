<template>
    <div class="a4page mx-auto p-7">
        <div class="flex h-auto items-center justify-between">
            <div class="w-8/12">
                <p class="text-3xl font-semibold mb-2">{{ information.firstName }} {{ information.middleName }} {{
                    information.lastName }}</p>
                <p class="font-semibold underline mb-1">{{ information.currentDesignation }}</p>
                <p class="font-semibold text-sm italic text-gray-500 mb-1">{{ information.email }} | {{
                    information.phone.join(" | ") }}</p>
                <p class="font-semibold text-sm italic text-gray-500 underline">{{ information.linkedinProfileLink }}
                </p>
            </div>
            <div class="w-4/12">
                <img class="h-auto w-9/12 ml-auto border-2 rounded-lg" src="/Picture1.jpg" alt="" />
            </div>
        </div>

        <hr class="my-3 border-2 border-gray-300">

        <div>
            <h1 class="text-3xl mb-2">Summary</h1>
            <p v-for="entry of summary" class="text-justify mb-1">{{ entry }}</p>
        </div>

        <hr class="my-3 border-2 border-gray-300">

        <div>
            <h1 class="text-3xl mb-2">Work Experience</h1>
            <div v-for="entry of workExperience.toReversed().splice(0, 3)" class="mb-2">
                <h2 class="text-xl font-semibold">{{ entry.companyName }} ({{ entry.level }})</h2>
                <p class="italic underline font-semibold text-gray-700 mb-1">{{ entry.start }} - {{ entry.end }} ({{
                    entry.duration }})
                </p>
                <ul class="ml-6 list-disc">
                    <li v-for="description of entry.jobDescription" class="mb-1">{{ description }}</li>
                </ul>
            </div>
        </div>

    </div>

    <div class="a4page mx-auto p-7">

        <div>
            <div v-for="entry of workExperience.toReversed().splice(3)" class="mb-2">
                <h2 class="text-xl font-semibold">{{ entry.companyName }} ({{ entry.level }})</h2>
                <p class="italic underline font-semibold text-gray-700 mb-1">
                    {{ entry.start }} - {{ entry.end }} ({{ entry.duration }})
                </p>
                <ul class="ml-6 list-disc">
                    <li v-for="description of entry.jobDescription" class="mb-1">{{ description }}</li>
                </ul>
            </div>
        </div>

        <hr class="my-3 border-2 border-gray-300">

        <div>
            <h1 class="text-3xl mb-2">Education</h1>
            <div v-for="entry of education" class="mb-5">
                <h2 class="text-xl font-semibold">{{ entry.degree }}</h2>
                <p class="italic font-semibold text-gray-700">
                    {{ entry.institution }} <span class="underline">({{ entry.start }} - {{ entry.end }})</span>
                </p>
                <p class="italic font-semibold text-gray-700">
                    {{ entry.score }}
                </p>
            </div>
        </div>

        <hr class="my-3 border-2 border-gray-300">

        <div>
            <h1 class="text-3xl mb-2">Skills</h1>
            <ul v-for="entry of technologies" class="list-disc ml-6">
                <li>{{ entry }}</li>
            </ul>
        </div>

        <hr class="my-3 border-2 border-gray-300">

    </div>

    <div class="a4page mx-auto p-7">
        <div>
            <h1 class="text-3xl mb-2">Achievements</h1>

            <ul class="list-disc ml-6">
                <li v-for="entry of achievements">{{ entry }}</li>
            </ul>
        </div>

        <hr class="my-3 border-2 border-gray-300">

        <div>
            <h1 class="text-3xl mb-2">Personal Details</h1>
            <table class="w-full">
                <tr>
                    <td class="w-4/12">Home Address</td>
                    <td class="w-8/12">{{ information.homeAddress }}</td>
                </tr>
                <tr>
                    <td class="w-4/12">Current Address</td>
                    <td class="w-8/12">{{ information.currentAddress }}</td>
                </tr>
                <tr>
                    <td class="w-4/12">Birth Date</td>
                    <td class="w-8/12">{{ information.birthDate }}</td>
                </tr>
                <tr>
                    <td class="w-4/12">Gender</td>
                    <td class="w-8/12">{{ information.gender }}</td>
                </tr>
                <tr>
                    <td class="w-4/12">Nationality</td>
                    <td class="w-8/12">{{ information.nationality }}</td>
                </tr>
                <tr>
                    <td class="w-4/12">Religion</td>
                    <td class="w-8/12">{{ information.religion }}</td>
                </tr>
                <tr>
                    <td class="w-4/12">Visa Status</td>
                    <td class="w-8/12">{{ information.visaStatus }}</td>
                </tr>
                <tr>
                    <td class="w-4/12">Visa Expiry</td>
                    <td class="w-8/12">{{ information.visaExpiry }}</td>
                </tr>
                <tr>
                    <td class="w-4/12">Marital Status</td>
                    <td class="w-8/12">{{ information.maritalStatus }}</td>
                </tr>
                <tr>
                    <td class="w-4/12">Languages</td>
                    <td class="w-8/12">{{ information.languages.join(", ") }}</td>
                </tr>
                <tr>
                    <td class="w-4/12">Hobbies</td>
                    <td class="w-8/12">{{ information.hobbies.join(", ") }}</td>
                </tr>
            </table>
        </div>

        <hr class="my-3 border-2 border-gray-300">

        <p class="text-center italic">{{ considerationNote }}</p>
    </div>

</template>

<script setup>
import { information, education, technologies, summary, workExperience, achievements, considerationNote } from "../assets/data.json"
</script>