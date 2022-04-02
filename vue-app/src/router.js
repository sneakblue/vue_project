import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage/HomePage.vue'
import LoginForm from './components/auth/LoginForm.vue'
import { useSessionStore } from './stores/session.js'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
            beforeEnter: (to, from) => {
                const sessionStore = useSessionStore();
                sessionStore.authenticate();
                if (!sessionStore.user) return '/login'
                else

            }
        },
        {
            path: '/login',
            component: LoginForm,
            beforeEnter: (to, from) => {

            }
        }
    ],
})
