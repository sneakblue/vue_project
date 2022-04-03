<script setup name='NavBar'>
import LogoutButton from '../auth/LogoutButton.vue'
</script>

<template>
    <nav>
        <router-link class='nav-item' to='/'>Home</router-link>
        <router-link class='nav-item' to='/login'>Login</router-link>
        <router-link class='nav-item' to='/sign-up'>Sign Up</router-link>
        <LogoutButton />
    </nav>
</template>
