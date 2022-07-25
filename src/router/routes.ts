import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('components/Login/index.vue'),
  },
  {
    path: '/chat_layout',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [{ path: '/chats', component: () => import('components/Chats/index.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
