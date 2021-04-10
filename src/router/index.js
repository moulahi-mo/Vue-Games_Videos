import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Details from '../components/games/details.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/games/:id',
    name: 'Details',
    component: Details,
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue'),
  },
  {
    path: '/reset',
    name: 'Reset',
    component: () =>
      import(/* webpackChunkName: "Resest password" */ '../views/Reset.vue'),
  },
  {
    path: '/reset/:token',
    name: 'NewPassword',
    component: () =>
      import(
        /* webpackChunkName: "New password" */ '../components/auth/newPassword.vue'
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
