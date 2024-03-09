import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "./pages/Main.vue"
import Resume from "./pages/Resume.vue"
import NewResume from "./pages/NewResume.vue"
const routes = [
    { path: '/', component: Main },
    { path: '/resume', component: Resume },
    { path: '/NewResume', component: NewResume },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
