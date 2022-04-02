import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage/HomePage.vue'
import LoginForm from './components/auth/LoginForm.vue'
import SignUpForm from './components/auth/SignUpForm.vue'
// import useSessionStore from './stores/session.js'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
            // beforeEnter: () => {
            //     sessionStore.authenticate();
            //     const sessionStore = useSessionStore();
            //     sessionStore.authenticate();
            //     if (!sessionStore.user) return '/login'
            // }
        },
        {
            path: '/login',
            component: LoginForm,
            // beforeEnter: () => {
            //     const sessionStore = useSessionStore();
            //     sessionStore.authenticate();
            //     if (sessionStore.user) return '/'
            // }
        },
        {
            path: '/sign-up',
            component: SignUpForm,
        }
    ],
})