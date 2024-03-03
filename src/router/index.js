import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
      meta: { title: 'Гостевой дом "Заречье"' },
  },
  {
    path: "/apartments/:id",
    name: "apartments",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RoomView.vue"),
    meta: { title: 'Гостевой дом "Заречье"' },
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;
