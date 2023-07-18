
export const routes = [
  {
    path: "/",
    name:'Dashboard',
    component: () => import("../components/Dashboard/Dashboard.vue"),
    children:[
      {
        path: "counter",
        name:'Counter',
        component: () => import("../components/Counter/Counter.vue"),
      },
      {
        path: "service",
        name:'Service',
        component: () => import("../components/Service/Service.vue"),
      },
    ]
  },
  
];
