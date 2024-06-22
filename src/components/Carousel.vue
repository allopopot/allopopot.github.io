<template>
    <div class="w-full h-auto relative">
        <button @click="prev($event)"
            class="absolute top-[50%] left-[2%] p-1 rounded-lg border-yellow-300 border-4 bg-gray-700 opacity-[40%] hover:opacity-[100%] transition translate-y-[-50%]">
            <i class="text-yellow-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
            </i>
        </button>

        <div class="border flex flex-row overflow-hidden rounded-lg" ref="imageSlider">
            <img class="w-full h-auto" :id="clean(image)" :src="image" v-for="image of props.images">
        </div>

        <button @click="next($event)"
            class="absolute top-[50%] right-[2%] p-1 rounded-lg border-yellow-300 border-4 bg-gray-700 opacity-[40%] hover:opacity-[100%] transition translate-y-[-50%]">
            <i class="text-yellow-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
            </i>
        </button>

    </div>
</template>


<script setup>
import { ref, onBeforeMount } from "vue"

const props = defineProps({ 'images': Array })
const imageSlider = ref(null)

const currentPosition = ref(0)


function prev(event) {
    event.preventDefault()
    if (currentPosition.value === 0) { return }
    currentPosition.value = currentPosition.value - 1
    let element = document.querySelector(`#${clean(props.images[currentPosition.value])}`)
    if (element === null) { return }
    imageSlider.value.scrollTo({
        left: element.offsetLeft, behavior: "smooth"
    })
}

function next(event) {
    event.preventDefault()
    if (currentPosition.value === props.images.length - 1) { return }
    currentPosition.value = currentPosition.value + 1
    let element = document.querySelector(`#${clean(props.images[currentPosition.value])}`)
    if (element === null) { return }
    imageSlider.value.scrollTo({
        left: element.offsetLeft, behavior: "smooth"
    })
}

function clean(string) {
    if ([undefined, null, ""].includes(string)) { return null }
    string = string.replace(/\//g, '')
    string = string.replace(/\-/g, '')
    string = string.replace(/\./g, '')
    return string
}
</script>