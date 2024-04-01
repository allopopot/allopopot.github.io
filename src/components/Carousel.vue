<template>
    <div class="w-full aspect-video relative bg-white mb-5 rounded-md">
        <div
            class="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-between px-2  pointer-events-none">
            <button
                class="bg-gray-900 p-3 rounded-md pointer-events-auto opacity-30 active:opacity-70 transition-all duration-150 ease-out hover:ease-in"
                @click="prev">
                <LeftArrowIcon></LeftArrowIcon>
            </button>
            <button
                class="bg-gray-900 p-3 rounded-md pointer-events-auto opacity-30 active:opacity-70 transition-all duration-150 ease-out hover:ease-in"
                @click="next">
                <RightArrowIcon></RightArrowIcon>
            </button>
        </div>

        <div ref="contentBox"
            class="absolute top-0 left-0 w-full h-full z-0 flex flex-col flex-wrap overflow-hidden snap-x">
            <slot></slot>
        </div>

    </div>
</template>

<script setup>
import LeftArrowIcon from "../components/LeftArrowIcon.vue";
import RightArrowIcon from "../components/RightArrowIcon.vue";
import { ref } from "vue";

const contentBox = ref()

function next() {

    contentBox.value.scrollTo({
        left: contentBox.value.scrollLeft + contentBox.value.getBoundingClientRect().width,
        behavior: "smooth"
    })
}

function prev() {

    contentBox.value.scrollTo({
        left: contentBox.value.scrollLeft - contentBox.value.getBoundingClientRect().width,
        behavior: "smooth"
    })
}
</script>