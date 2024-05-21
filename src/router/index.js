import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../auth/SignUp.vue";
import SignIn from "../auth/SignIn.vue";
import Layouts from "../components/layouts/Nav.vue";
import DashboardHome from "../views/dashboardHome.vue";

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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
