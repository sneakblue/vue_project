<script setup name='User'>
import { ref } from 'vue'

const user = ref({});
const userId = this.route.params.userId;

if (!userId) {
    this.route.push('/');
}

(async () => {
    const response = await fetch(`/api/users/${userId}`);
    const loadedUser = await response.json();
    user.value = loadedUser;
})

</script>


<template>
    <ul>
        <li>
            <strong>User Id</strong> {{userId}}
        </li>
        <li>
            <strong>Username</strong> {{user.username}}
        </li>
        <li>
            <strong>Email</strong> {{user.email}}
        </li>
    </ul>
</template>
