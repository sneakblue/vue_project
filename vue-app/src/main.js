// import { createApp } from process.env.NODE_ENV !== "production" ? 'vue/dist/vue.esm-browser' : 'vue.runtime.esm-browser.prod'
import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'

const app = createApp(App);

// Here we create a pinia (the root store) and pass it to the app
app.use(createPinia());

app.mount('#app');
