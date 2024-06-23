<template>


    <div class="p-6 border-2 border-white mx-auto md:w-2/3 lg:w-2/3">
        <input class="w-full px-3 py-2 border rounded-md mb-3" type="text" v-model="hiringManagerName"
            placeholder="Enter Hiring Manager Name">
        <input class="w-full px-3 py-2 border rounded-md mb-3" type="text" v-model="positionTitle"
            placeholder="Enter Position Title">
        <input class="w-full px-3 py-2 border rounded-md mb-3" type="text" v-model="companyName"
            placeholder="Enter Company Name">

        <Letter1 :company-name="companyName"
            :fullname="[information.firstName, information.middleName, information.lastName].join(' ')"
            :hiring-manager-name="hiringManagerName" :position-title="positionTitle">
        </Letter1>
    </div>



</template>

<script setup>
import { ref, onMounted } from "vue"
import Letter1 from "./Letter1.vue";
import { information } from "../../assets/data.json"
onMounted(() => {
    navigator.permissions.query({ name: "write-on-clipboard" }).then((result) => {
        if (result.state == "granted" || result.state == "prompt") {
            alert("Copy To Clipboard Access Granted");
        }
    });

})
const hiringManagerName = ref("")
const positionTitle = ref("")
const companyName = ref("")

</script>