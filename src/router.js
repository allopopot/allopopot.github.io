import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "./pages/Main.vue"
import Resume from "./pages/Resume.vue"
import NewResume from "./pages/NewResume.vue"
import MyPortfolio from "./pages/MyPortfolio.vue"
const routes = [
    { path: '/', component: Main },
    { path: '/resume', component: NewResume },
    { path: '/my-portfolio', component: MyPortfolio },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
