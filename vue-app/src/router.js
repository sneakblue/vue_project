import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage/HomePage.vue'
import LoginForm from './components/auth/LoginForm.vue'
import SignUpForm from './components/auth/SignUpForm.vue'
import appStore from './stores'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
            beforeEnter: () => {
                const sessionStore = appStore.useSessionStore;
                sessionStore.authenticate();
                if (!sessionStore.user) return '/login'
            }
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
