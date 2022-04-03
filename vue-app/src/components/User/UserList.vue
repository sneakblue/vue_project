<script setup name='UserList'>
import { ref } from 'vue'

const users = ref([]);


(async () => {
    const response = await fetch('/api/users/');
    const responseData = await response.json();
    users.value = responseData.users;
})


const userComponents = users.value.map((user) => {
    return (
        <li key={user.id}>
            <router-link to={`/users/${user.id}`}>{user.username}</router-link>
        </li>
    )
})

</script>

<template>
<div>
    {{userComponents}}
</div>
</template>
