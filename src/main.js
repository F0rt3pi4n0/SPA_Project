import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Paginate from "vuejs-paginate-next";
window.$ = window.jQuery = require('jquery');
createApp(App).use(Paginate).use(router).mount('#app')

