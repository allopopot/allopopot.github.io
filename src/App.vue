<template>
    <div id="mainBody" class="w-full h-screen absolute left-0 top-0 grid ">
        <Navbar />
        <RouterView v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component" />
            </transition>
        </RouterView>
    </div>

</template>

<script setup>
import Navbar from "./components/Navbar.vue"
import { RouterView } from "vue-router"
</script>

<style>
#mainBody {
    display: grid;
    grid-template-rows: 1fr 12fr;
    grid-template-columns: 1fr;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.75s ease-out;
}

.slide-enter-to {
    position: absolute;
    right: 0;
}

.slide-enter-from {
    position: absolute;
    right: -100%;
}

.slide-leave-to {
    position: absolute;
    left: -100%;
}

.slide-leave-from {
    position: absolute;
    left: 0;
}
</style>