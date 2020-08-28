import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Header from "../components/Header.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/header",
      name: "Header",
      component: Header
    }
  ]
});
