import { createRouter, createWebHistory } from "vue-router";

// import Home from '../views/Home.vue'
// import Movies from '../views/Movies.vue'
// import About from '../views/About.vue'

// const Home = () => import ('../views/Home.vue')
// const About = () => import ('../views/About.vue')

// const Movies = () => import ('../views/Movies.vue')

const routes = [
  { path: "/", name: "Home", component: () => import("../views/Home.vue") },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/movies",
    name: "MovieList",
    component: () => import("../views/Movies.vue"),
  },
  {
    path: "/movies/:id",
    name: "MovieDetails",
    component: () => import("../views/MovieDetails.vue"),
    props: true
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
