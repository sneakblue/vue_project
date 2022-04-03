<script setup name='SignUpForm'>
import appStore from '../../stores/index.js'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { watch } from 'vue'

const sessionStore = appStore.useSessionStore;
const router = useRouter();
const { user } = storeToRefs(sessionStore);

watch(user, (curr) => {
    if (curr) router.push('/');
})

</script>

<template>
    <h4>Signup Form Loaded</h4>
</template>
