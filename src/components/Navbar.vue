<template>
    <div id="Navbar"
        class="sticky bg-yellow-300 text-gray-800 flex gap-2 justify-between items-center px-8 w-full h-14 top-0 left-0 overflow-hidden z-40">
        <div id="NavbarBrand" class="flex-shrink-0">
            <h1 class="m-0 font-bold">
                {{ information.firstName }} {{ information.middleName }} {{ information.lastName }}
            </h1>
        </div>
        <div id="NavbarButton">
            <MenuIcon size="30" @click="toggleNav"
                class="border-2 rounded-md p-1 border-gray-800 active:bg-gray-800 active:text-yellow-300" />
        </div>
    </div>

    <div id="NavContainer" class="p-6 overflow-hidden fixed top-0 right-0 translate-x-full bg-yellow-300 text-gray-800 h-full w-full md:w-1/3 shadow-lg flex flex-col z-50 transition-all duration-150 ease-in-out">
        <div class="flex justify-between items-center w-full">
            <h2 class="text-2xl font-bold">{{ information.firstName }} {{ information.middleName }} {{ information.lastName }}</h2>
            <CloseIcon size="25" @click="toggleNav"></CloseIcon>
        </div>
    </div>
</template>

<script setup>
import MenuIcon from "./MenuIcon.vue"
import CloseIcon from "./CloseIcon.vue"
import { information } from "../assets/data.json"
import { ref } from "vue"

const isNavOpened = ref(false)

function toggleNav() {
    const bodyTargetElement = document.querySelector("body")
    const navContainerTargetElement = document.querySelector("#NavContainer")

    if (isNavOpened.value === false) {
        bodyTargetElement.classList.add("overflow-hidden")
        navContainerTargetElement.classList.remove("translate-x-full")
        isNavOpened.value = true
    }
    else {
        bodyTargetElement.classList.remove("overflow-hidden")
        navContainerTargetElement.classList.add("translate-x-full")
        isNavOpened.value = false
    }
}

</script>

<style scoped></style>