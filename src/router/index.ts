import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/pages/Index.vue'),
  },
  {
    path: '/slot',
    component: () => import('@/pages/SlotDemo.vue'),
  },
  {
    path: '/props',
    component: () => import('@/pages/PropsDemo.vue'),
  },
  {
    path: '/reactive',
    component: () => import('@/pages/ReactiveDemo.vue'),
  },
];

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});
