<template>
    <Navbar></Navbar>
    <div class="bg-gray-800 text-white h-full pb-1">
        <div class="w-screen md:w-5/6 lg:w-4/6 mx-auto">
            <video class="w-full md:w-5/6 lg:w-1/2 mx-auto" muted autoplay loop src="/outputDark.webm"></video>
        </div>

        <div class="w-screen md:w-5/6 lg:4/6 mx-auto px-5 mb-4">
            <h1 class="text-3xl text-center font-semibold text-yellow-300 mb-3">Hello There Mate !!!</h1>
            <h1 class="text-xl text-center font-semibold text-yellow-300 mb-3">I'm
                <span class="underline text-decoration-3">
                    {{ information.firstName }} {{ information.middleName }} {{ information.lastName }}.
                </span>
            </h1>
            <hr class="border-yellow-300 border-2 my-3">
            <div class="text-left bg-gray-700 px-3 py-3 rounded-md">
                <p class="mb-3" v-for="paragraph of summary">{{ paragraph }}</p>
            </div>
                
        </div>
    </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import { information, summary, technologies } from "../assets/data.json"
</script>