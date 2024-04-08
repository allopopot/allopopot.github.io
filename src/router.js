import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "./pages/Main.vue"
import Resume from "./pages/Resume.vue"
import MyPortfolio from "./pages/MyPortfolio.vue"
import CoverLetter from "./pages/CoverLetter.vue"
const routes = [
    { path: '/', component: Main },
    { path: '/resume', component: Resume },
    { path: '/my-portfolio', component: MyPortfolio },
    { path: '/cover-letter', component: CoverLetter },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
