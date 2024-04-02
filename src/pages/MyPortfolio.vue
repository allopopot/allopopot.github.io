<template>
    <Navbar></Navbar>

    <div class="bg-gray-800 text-white h-full">
        <div class="w-full md:w-3/4 lg:w-6/12 mx-auto p-5">
            <h1 class="text-2xl font-bold mb-6 p-6 bg-gray-900 rounded-md border-2 border-yellow-300 text-center">
                {{ information.firstName }} {{ information.middleName }} {{ information.lastName }}
                <p class="text-lg">{{ information.currentDesignation }}</p>
            </h1>

            <div class="mb-6">
                <h2 class="text-xl font-semibold mb-3">A little about myself...</h2>
                <hr class="my-4 border">

                <p class="text-justify" v-for="entry of summary">{{ entry }}</p>
            </div>

            <div class="mb-6">
                <h2 class="text-xl font-semibold mb-3">Technologies that I know of...</h2>
                <hr class="my-4 border">

                <ul class="flex flex-wrap gap-2 justify-center">
                    <li v-for="entry of technologiesAlternative"
                        class="rounded-full bg-gray-900 px-4 py-2 hover:border-yellow-300 border-2 border-transparent hover:border-yellow-300 font-semibold text-center">
                        {{ entry }}</li>
                </ul>
            </div>

            <div class="mb-6">
                <h2 class="text-xl font-semibold mb-3">Projects that I have worked on...</h2>
                <hr class="my-4 border">
                <div
                    class="mb-5 p-4 hover:shadow-lg hover:shadow-black border-2 border-white rounded-lg transition-all duration-300 ease-out hover:ease-in">
                    <h2 class="text-xl font-semibold mb-5">Project Pulse - ERP</h2>
                    <Carousel>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/project-pulse/picture-1.png" alt="picture-1.png">
                        </div>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/project-pulse/picture-2.png" alt="picture-2.png">
                        </div>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/project-pulse/picture-3.png" alt="picture-3.png">
                        </div>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/project-pulse/picture-4.jpeg" alt="picture-4.jpeg">
                        </div>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/project-pulse/picture-5.jpeg" alt="picture-5.jpeg">
                        </div>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/project-pulse/picture-6.jpeg" alt="picture-6.jpeg">
                        </div>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/project-pulse/picture-7.jpeg" alt="picture-7.jpeg">
                        </div>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/project-pulse/picture-8.jpeg" alt="picture-8.jpeg">
                        </div>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/project-pulse/picture-9.jpeg" alt="picture-9.jpeg">
                        </div>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/project-pulse/picture-10.jpeg"
                                alt="picture-10.jpeg">
                        </div>
                    </Carousel>

                    <ul class="list-disc ml-5">
                        <li>Built Highly Customised ERP Solution with HRMS, CRM, and Project Management.</li>
                        <li>Frontend built with Nuxt.js (Vue.js 3).</li>
                        <li>Backend built with Node.js (Express.js).</li>
                        <li>Integrated Google SSO with Gmail and Google Calendar.</li>
                        <li>Web Push Notifications implemented with Server-Sent Events.</li>
                        <li>Integrated Firebase for Mobile Push Notifications.</li>
                    </ul>

                </div>
                <div
                    class="mb-5 p-4 hover:shadow-lg hover:shadow-black border-2 border-white rounded-lg transition-all duration-300 ease-out hover:ease-in">
                    <h2 class="text-xl font-semibold mb-5">HRDirect - HRMS</h2>
                    <Carousel>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/hr-direct/picture-1.png" alt="picture-1.png">
                        </div>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/hr-direct/picture-2.png" alt="picture-2.png">
                        </div>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/hr-direct/picture-3.png" alt="picture-3.png">
                        </div>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/hr-direct/picture-4.png" alt="picture-4.png">
                        </div>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/hr-direct/picture-5.png" alt="picture-5.png">
                        </div>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/hr-direct/picture-6.png" alt="picture-6.png">
                        </div>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/hr-direct/picture-7.png" alt="picture-7.png">
                        </div>
                        <div class="w-full h-full snap-start grid items-center">
                            <img class="object-cover" src="../assets/hr-direct/picture-8.png" alt="picture-8.png">
                        </div>
                    </Carousel>

                    <ul class="list-disc ml-5">
                        <li>Maintained backend API server.</li>
                        <li>New HRDirect API server built using MCS (Model-Controller-Services) Structure.</li>
                        <li>Improved code readability and reusability.</li>
                        <li>Optimized MongoDB Queries and API logic for faster API responses.</li>
                        <li>Implemented Okta, Google & Microsoft SSO for various clients of HRDirect.</li>
                        <li>Implemented APIs from Google & Microsoft to retrieve emails and calendar information of user
                            for
                            various clients of HRDirect.</li>
                        <li>Integrated APIs from ZKTECO Biotime for attendance retrival.</li>
                    </ul>

                </div>
            </div>

            <div
                class="mb-5 p-4 hover:shadow-lg hover:shadow-black border-2 border-white rounded-lg transition-all duration-300 ease-out hover:ease-in">
                <h2 class="text-xl font-semibold mb-5">In-house SSO NPM Package</h2>

                <ul class="list-disc ml-5">
                    <li>Built a In-house NPM package to simplify SSO implementations for development teams for various clients.</li>
                    <li>Implemented Google and Microsoft OAuth Providers.</li>
                    <li>Built with TypeScript.</li>
                    <li>Modular and easy to integrate into any project.</li>
                </ul>

            </div>
        </div>

    </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Carousel from "../components/Carousel.vue";
import { technologiesAlternative, summary, information } from "../assets/data.json"

</script>