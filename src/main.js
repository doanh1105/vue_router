import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {} from "./assets/styles/global.css";
import store from "./store/";

createApp(App).use(router).use(store).mount("#app");
