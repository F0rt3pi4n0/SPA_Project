import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home_view.vue'
import AboutView from '../views/About_view.vue'
//import Table_Paginate_view from '../views/Table_Paginate_view.vue'


const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/tableview',
        name: 'Api-Table',
        component: () =>
            import ('../views/Table_view.vue')
    },
    {
        path: '/tablepaginate',
        name: 'Paginacja-Tabeli',
        component: () =>
            import ('../views/Table_Paginate_view.vue')
    },
    {
        path: '/aboutview',
        name: 'AboutPage',
        component: AboutView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router