<template>
    <div class="w-screen md:w-5/6 lg:4/6 mx-auto">
        <video class="w-full md:w-5/6 lg:w-1/2 mx-auto" muted autoplay loop src="/outputDark.webm"></video>
    </div>

    <div class="w-screen md:w-5/6 lg:4/6 mx-auto px-5 mb-4">
        <h1 class="text-3xl text-center font-semibold text-yellow-300 mb-3">Hello There Mate !!!</h1>
        <h1 class="text-xl text-center font-semibold text-yellow-300 mb-3">I'm
            <span class="underline text-decoration-3">{{ information.Firstname }} {{
                information.Middlename }} {{ information.Lastname }}.</span>
        </h1>
        <hr class="border-yellow-300 border-2 my-3">
        <div class="text-left bg-gray-700 px-3 py-3 rounded-md">
            <p class="mb-3" v-for="paragraph of summary">{{ paragraph }}</p>
        </div>
        <hr class="border-yellow-300 border-2 my-3">
        <div>
            <h2 class="text-2xl text-yellow-300 font-semibold mb-2">Technologies That I know...</h2>
            <ul class="list-disc ml-5">
                <li class="font-semibold hover:text-yellow-300 hover:underline" v-for="technology of technologies">{{
                    technology }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import data from "../assets/data.json"
import { ref } from "vue"

const information = ref(data.information)
const summary = ref(data.summary)
const technologies = ref(data.technologies)
</script>