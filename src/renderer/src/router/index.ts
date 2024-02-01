import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../pages/Login.vue'),
  }
]

const router = createRouter({ routes, history: createWebHistory() });

export default router;
