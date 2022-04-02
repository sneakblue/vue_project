<script setup name='NavBar'>
// import useSessionStore from '../../stores/session.js'


// export default {
//     // addition of store for use in component
//     setup() {
//         const sessionStore = useSessionStore()

//         return { sessionStore }
//     },
//     name: 'NavBar',
//     props: {
//         userName: String,
//     }
// }
</script>

<template>
    <nav>
        <router-link class='nav-item' to='/'>Home</router-link>
        <router-link class='nav-item' to='/login'>Login</router-link>
        <router-link class='nav-item' to='/sign-up'>Sign Up</router-link>
    </nav>
</template>
