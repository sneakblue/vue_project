
<script>
import NavBar from './components/Navigation/NavBar.vue'


export default {
    name: 'App',
    components: {
      NavBar
  }
}
</script>


<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
        <NavBar />
        <router-view/>
    </div>

</template>


<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
