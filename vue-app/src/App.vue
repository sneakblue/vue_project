
<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/Navigation/NavBar.vue'

// const routes = {
//     '/': HomePage
// }

export default {
    // data() {
    //     return {
    //         currentPath: window.location.hash
    //     }
    // },
    // computed: {
    //     currentView() {
    //         return routes[this.currentPath.slice(1) || '/'] || NotFound
    //     }
    // },
    name: 'App',
    components: {
      NavBar
  }
}
</script>


<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <NavBar />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
