<template>
    <div id="Navbar" :class="{ 'hidden': router.currentRoute.value.path === '/resume' }"
        class="sticky bg-yellow-300 text-gray-800 flex gap-2 justify-between items-center px-8 w-full h-14 top-0 left-0 overflow-hidden z-40">
        <div id="NavbarBrand" class="flex-shrink-0">
            <h1 class="m-0 font-bold">
                {{ information.firstName }} {{ information.middleName }} {{ information.lastName }}
            </h1>
        </div>
        <div id="NavbarButton">
            <MenuIcon size="30" @click="toggleNav"
                class="border-2 rounded-md p-1 border-gray-800 hover:bg-gray-800 hover:text-yellow-300" />
        </div>
    </div>

    <div id="NavContainer" :class="{ 'hidden': router.currentRoute.value.path === '/resume' }"
        class="overscroll-contain p-6 overflow-hidden fixed top-0 right-0 translate-x-full bg-yellow-300 text-gray-800 h-full w-full md:w-1/3 shadow-lg flex flex-col gap-4 z-50 transition-all duration-150 ease-in-out">
        <div class="flex justify-between items-center w-full">
            <h2 class="text-2xl font-bold">{{ information.firstName }} {{ information.middleName }} {{
                information.lastName }}</h2>
            <CloseIcon size="30" @click="toggleNav" class="hover:bg-gray-800 hover:text-yellow-300 rounded-md p-1">
            </CloseIcon>
        </div>
        <hr class="border border-gray-800">
        <div class="overflow-auto" @click="closeNav">
            <RouterLink to="/">
                <div
                    class="px-3 py-4 hover:shadow-lg hover:bg-gray-800 hover:text-yellow-300 transition-all duration-150 ease-in-out rounded-lg border border-gray-800 mb-2 font-semibold">
                    Home</div>
            </RouterLink>
            <RouterLink to="/my-portfolio">
                <div
                    class="px-3 py-4 hover:shadow-lg hover:bg-gray-800 hover:text-yellow-300 transition-all duration-150 ease-in-out rounded-lg border border-gray-800 mb-2 font-semibold">
                    Portfolio</div>
            </RouterLink>
            <RouterLink to="/resume">
                <div
                    class="px-3 py-4 hover:shadow-lg hover:bg-gray-800 hover:text-yellow-300 transition-all duration-150 ease-in-out rounded-lg border border-gray-800 mb-2 font-semibold">
                    Resume</div>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import MenuIcon from "./MenuIcon.vue"
import CloseIcon from "./CloseIcon.vue"
import { information } from "../assets/data.json"
import { ref } from "vue"
import { RouterLink, useRouter } from "vue-router"

const isNavOpened = ref(false)
const router = useRouter()

function toggleNav() {
    console.log(router.currentRoute, "======================")
    const bodyTargetElement = document.querySelector("body")
    const navContainerTargetElement = document.querySelector("#NavContainer")

    if (isNavOpened.value === false) {
        navContainerTargetElement.classList.remove("translate-x-full")
        isNavOpened.value = true
    }
    else {
        navContainerTargetElement.classList.add("translate-x-full")
        isNavOpened.value = false
    }
}

function closeNav() {
    const navContainerTargetElement = document.querySelector("#NavContainer")
    navContainerTargetElement.classList.add("translate-x-full")
    isNavOpened.value = false
}

</script>

<style scoped></style>