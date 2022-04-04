<script setup name='User'>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter, useRoute } from 'vue-router'
import appStore from '../../stores/index'

const router = useRouter();
const route = useRoute();
const userId = route.params.userId;
const userStore = appStore.useUserStore;
const { userList } = storeToRefs(userStore);
const user = ref(userStore.userList[userId]);
console.log(userList.value)

if (userList) {
    console.log('inside userlist check')
    console.log(user);
    user.value = userList.value[userId];
}

console.log(user.value.email);
if (!userId) {
    router.push('/');
}

watch(userList, (curr) => {
    console.log('inside watch')
    user.value = curr[userId]
    console.log(user.value);
})
</script>


<template>
    <ul>
        <div v-if='user.id === userId'>
            <li>
                <strong>User Id</strong> {{user.id}}
            </li>
            <li>
                <strong>Username</strong> {{user.username}}
            </li>
            <li>
                <strong>Email</strong> {{user.email}}
            </li>
        </div>
    </ul>
</template>
