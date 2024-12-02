import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router";
import { VIEW_CONFIG } from "@/constants";

const routes: Array<RouteRecordRaw> = [
  {
    ...VIEW_CONFIG.CONSULTATION_LIST,
    component: () => import("@/views/ConsultationListScreen.vue"),
  },
  {
    ...VIEW_CONFIG.CONSULTATION,
    component: () => import("@/views/ConsultationScreen.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/legal-speech"),
  routes,
});

export default router;
