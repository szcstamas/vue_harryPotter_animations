import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PracticeView from "../views/PracticeView.vue";
import HarryPotterView from "../views/HarryPotterView.vue";
import HarryPotterDetail from "../components/HarryPotterDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/practice",
      name: "practice",
      component: PracticeView,
    },
    {
      path: "/harry-potter",
      name: "harry-potter",
      component: HarryPotterView,
    },
    {
      path: "/harry-potter/:id",
      name: "harry-potter-details",
      props: true,
      component: HarryPotterDetail,
    },
  ],
});

export default router;
