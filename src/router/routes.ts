import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('components/Login/index.vue'),
  },
  {
    path: '/chat_layout',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: 'settings', component: () => import('components/Tools/Settings/index.vue') },
      {
        path: 'chat/:id',
        component: () => import('components/Chat/index.vue'),
      },
      {
        path: 'write_message',
        component: () => import('components/Tools/WriteMessage/index.vue'),
      },
      {
        path: 'create_group',
        component: () => import('components/Tools/CreateGroup/index.vue'),
      },
    ],
  },
  {
    path: '/create_group',
    component: () => import('components/Tools/CreateGroup/index.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
