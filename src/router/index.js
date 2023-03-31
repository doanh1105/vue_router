import transactionVue from "@/views/transaction.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import transactionDetail from "@/views/transaction-detail.vue";
import NotFound from "@/views/404.vue";

const routes = [
  {
    path: "/",
    name: "overview-router",
    component: HomeView,
  },
  {
    path: "/transaction",
    name: "transaction-router",
    component: transactionVue,
  },
  {
    path: "/transaction/:id",
    name: "transaction-detail-router",
    component: transactionDetail,
  },
  {
    path: "/ts/",
    redirect: "/transaction/",
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
