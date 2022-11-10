import { Cookies } from 'quasar';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('components/Login/index.vue'),
    beforeEnter: (to, from, next) => {
      const token = Cookies.get('Token');
      if (Boolean(token)) {
        next('/chat_layout');
      }
      next();
    },
  },
  {
    path: '/sign_up',
    component: () => import('components/SignUp/index.vue'),
  },
  {
    path: '/chat_layout',
    component: () => import('src/layouts/index.vue'),
    beforeEnter: (to, from, next) => {
      const cookie = Cookies.get('Token');
      if (!Boolean(cookie)) {
        next('/');
      }
      next();
    },
    children: [
      {
        path: 'settings',
        component: () => import('components/Tools/Settings/index.vue'),
        children: [
          {
            path: 'main',
            component: () => import('components/Tools/Settings/Layout/index.vue'),
          },
          {
            path: 'gadgets',
            component: () => import('components/Tools/Settings/Pages/Gadgets/index.vue'),
          },
        ],
      },
      {
        path: 'chat',
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
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
