<script setup name='LoginForm'>
import { ref } from 'vue'
import appStore from '../../stores/index.js'

const sessionStore = appStore.useSessionStore;
console.log(sessionStore.user);

const email = ref('');
const password = ref('');

const handleLogin = async () => {
    console.log(email);
    console.log(password);
    await sessionStore.login(email.value, password.value);
    if (sessionStore.user) {
        this.router.push('/');
    }
}

// const updateEmail = (event) => {
//     email = event.target.value;
// }

// const updatePassword = (event) => {
//     password = event.target.value;
// }

</script>

<template>
    <div>
        <form @submit.prevent='handleLogin'>
            <input type='text'
                v-model='email'
                placeholder="email"
            />
            <input type='text'
                v-model='password'
                placeholder="password"
            />
            <button
                type='submit'
            >
                Submit
            </button>
        </form>
    </div>
</template>
