import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { registerStore } from './stores/index.js'

const app = createApp(App);

// Here we create a pinia (the root of the stores) and pass it to the app
app.use(createPinia());
registerStore();
import { router } from './router'
//Here we attach the router to our instance of the app
app.use(router);

app.mount('#app');
