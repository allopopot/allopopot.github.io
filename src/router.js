import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "./pages/Main.vue"
import Resume from "./pages/Resume.vue"
const routes = [
    { path: '/', component: Main },
    { path: '/resume', component: Resume },
    // { path: '/resume', component: About },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
