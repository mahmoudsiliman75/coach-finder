import Vue from "vue";
import VueRouter from "vue-router";

import CoachesList from "../pages/coaches/CoachesList.vue";
import CoachDetails from "../pages/coaches/CoachDetails.vue";
import CoachRegistration from "../pages/coaches/CoachRegistration.vue";

import ContactCoach from "../pages/requests/ContactCoach.vue";
import RequestsReceived from "../pages/requests/RequestsReceived.vue"

import NotFound from "../pages/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/coaches'
  },
  {
    path: '/coaches',
    component: CoachesList
  },
  {
    path: '/coaches/:id',
    component: CoachDetails,
    children: [{
      path: 'contact',
      component: ContactCoach
    }]
  },
  {
    path: '/register',
    component: CoachRegistration
  },
  {
    path: '/requests',
    component: RequestsReceived
  },
  {
    path: '/:notFound(.*)',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
