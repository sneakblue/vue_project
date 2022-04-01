<script>

async function fetchData() {
    const response = await fetch('/api/users/');
    const responseData = await response.json();
    
}


export default {
    name: 'UserList',
}
</script>

<template>

</template>
