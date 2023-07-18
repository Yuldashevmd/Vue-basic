import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import { routes } from "./utils/routes";
import { createVuetify } from "vuetify/lib/framework.mjs";

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// Vuetify
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { store } from "./store/Vuex";
import { pinia } from "./store/Pinia";

const vuetify = createVuetify({
  components,
  directives,
})



createApp(App).use(router).use(vuetify).use(store).use(pinia).mount("#app");
