<template>
    <div
        class="absolute left-0 top-0 z-0 h-screen w-screen bg-gray-800 overflow-hidden flex flex-col flex-wrap justify-center items-center">

        <video src="/outputDark.webm" class="w-full h-auto md:w-3/5 lg:w-1/2 mx-auto" autoplay muted loop></video>

        <h1 class="text-yellow-300 text-center font-semibold text-4xl mb-2">Hello There Mate !!!</h1>
        <p class="text-yellow-300 text-center font-semibold text-2xl mb-2 mx-auto">I'm
            {{ information.firstName }} {{ information.middleName }} {{ information.lastName }}.
        </p>
        <RouterLink to="/my-portfolio">
            <button id="portfolio-button"
                class="px-8 py-3 bg-yellow-300 rounded-full text-center font-semibold text-xl block mx-auto">Visit My
                Portfolio</button>
        </RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { information } from "../assets/data.json"
</script>


<style scoped>
#portfolio-button {
    box-shadow: 0 0 0px 0px #fde047;
    animation-name: shadow-glow;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
}

@keyframes shadow-glow {
    0% {
        box-shadow: 0 0 2rem 0px #fde047;

    }

    100% {
        box-shadow: 0 0 0px 0px #fde047;

    }
}
</style>