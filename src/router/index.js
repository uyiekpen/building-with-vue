import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../auth/SignUp.vue";
import SignIn from "../auth/SignIn.vue";
import Layouts from "../components/layouts/Nav.vue";
import DashboardHome from "../views/Dashboard/index.vue";
import ProductList from "../views/productList/index.vue";

const routes = [
  {
    path: "/",
    component: SignUp,
  },
  {
    path: "/login",
    component: SignIn,
  },
  {
    path: "/dashboard",
    component: Layouts,
    children: [
      {
        path: "",
        name: "DashboardHome",
        component: DashboardHome,
      },
      {
        path: "/productlist",
        name: "ProductList",
        component: ProductList,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
