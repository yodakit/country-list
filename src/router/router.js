import { createRouter, createWebHashHistory } from 'vue-router';
import CountryPage from "@/views/CountryPage.vue";
import MainPage from "@/views/MainPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: MainPage },
    { path: '/country/:name', name: 'country', component: CountryPage }
  ]
})