<script setup>
</script>

<template>
    <RouterView v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" />
        </transition>
    </RouterView>
</template>

<script setup>
import {RouterView} from "vue-router"
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>