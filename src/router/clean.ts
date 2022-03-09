import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";
import JwtService from "@/core/services/JwtService";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
      },
      {
        path: "/add",
        name: "add",
        component: () => import("@/views/Add.vue"),
      },
      {
        path: "/mozaf",
        name: "mozaf",
        component: () => import("@/views/mozaf.vue"),
      },
      {
        path: "/details",
        name: "details",
        component: () => import("@/views/CustomersTable.vue"),
      },
      {
        path: "/customers",
        name: "customers",
        component: () => import("@/views/details.vue"),
      },
      {
        path: "/over",
        name: "over",
        component: () => import("@/views/Overview.vue"),
      },
      {
       
        path: "/masge",
        name: "masge",
        component: () => import("@/views/Masge.vue"),
      },
      {
       
        path: "/torood",
        name: "torood",
        component: () => import("@/views/torood.vue"),
      },
      
      {      
        path: "/notificat",
        name: "notificat",
        component: () => import("@/views/notificat.vue"),
      },
      {
        path: "/addclient",
        name: "addclient",
        component: () => import("@/views/Addclient.vue"),
      },
      {
        path: "/personal",
        name: "personal",
        component: () => import("@/views/Personal.vue"),
      },
      {
        path: "/message",
        name: "message",
        component: () => import("@/views/Message.vue"),
      },
 
      {
        path: "/builder",
        name: "builder",
        component: () => import("@/views/Builder.vue"),
      },
 
    ],
  },
  


 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  // reset config to initial state
  store.commit(Mutations.RESET_LAYOUT_CONFIG);

  store.dispatch(Actions.VERIFY_AUTH, { api_token: JwtService.getToken() });

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
