<template>
    <div class="a4page mx-auto flex border-2">
        <div class="w-3/5 h-full p-4 font-wrap">
            <h1 class="text-4xl underline font-bold mt-5 mb-3">{{ information.firstName }} {{ information.middleName }}
                {{ information.lastName }}</h1>
            <em class="font-semibold text-xl underline">{{ information.currentDesignation }}</em>
            <hr class="border-2 border-gray-300 rounded-sm my-4">

            <div>
                <h2 class="text-2xl font-bold">Summary</h2>
                <p v-for="entry in summary" class="my-3">{{ entry }}</p>
            </div>
            <hr class="border-2 border-gray-300 rounded-sm my-4">

            <div>
                <h2 class="text-2xl font-bold">Education</h2>
                <ul class="list-disc ml-4">
                    <li v-for="entry in education" class="my-3">
                        <h3 class="text-xl font-semibold">{{ entry.degree }}</h3>
                        <p class="underline font-semibold "> {{ entry.institution }}</p>
                        <p class="italic">{{ entry.start }} - {{ entry.end }}</p>
                        <p class=""> {{ entry.score }}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="w-2/5 h-full bg-blue-400 text-sm p-4 text-white">
            <img src="/Picture1.jpg" alt="" class="w-5/6 h-auto mx-auto my-5 rounded-md">
            <p class="mb-1 text-center font-semibold">{{ information.email }}</p>
            <p class="mb-1 text-center font-semibold"> {{ information.phone.join() }}</p>
            <p class="mb-1 text-center font-semibold">{{ information.currentAddress }}</p>

            <h1 class="text-xl mt-4 font-semibold">Key Skill</h1>
            <hr class="border-2 border-white rounded-sm my-2">
            <ul class="list-disc ml-4">
                <li v-for="entry in technologies" class="my-0 font-semibold text-base">{{ entry }}</li>
            </ul>

            <h1 class="text-xl mt-4 font-semibold">Personal Details</h1>
            <hr class="border-2 border-white rounded-sm my-2">
            <div class="grid grid-cols-2 font-semibold text-base">
                <div>Gender:</div>
                <div>{{ information.gender }}</div>
                <div>Birth Date:</div>
                <div>{{ information.birthDate }}</div>
                <div>Nationality:</div>
                <div>{{ information.nationality }}</div>
                <div>Religion:</div>
                <div>{{ information.religion }}</div>
                <div>References:</div>
                <div>{{ information.references }}</div>
                <div>Visa Status:</div>
                <div>{{ information.visaStatus }}</div>
                <div>Visa Expiry:</div>
                <div>{{ information.visaExpiry }}</div>
                <div>Marital Status:</div>
                <div>{{ information.maritalStatus }}</div>
                <div>Permanent Status:</div>
                <div>{{ information.homeAddress }}</div>
                <div>Languages:</div>
                <div>{{ information.languages.join(", ") }}</div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { information, education, technologies, summary } from "../assets/data.json"
</script>