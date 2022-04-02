<script setup name='LoginForm'>
import appStore from '../../stores/index.js'

const sessionStore = appStore.useSessionStore;
console.log(sessionStore.user);
</script>

<template>
    <h4>Login Form Loaded</h4>
</template>
