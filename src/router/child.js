export const Child = [
  {
    path: "/",
    name: "Home",
    meta: {
      breadcrumbs: [
        {
          text: "Home",
          disabled: true,
          href: "",
        },
      ],
    },
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/tes",
    name: "Tes",
    meta: {
      breadcrumbs: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "Tes",
          disabled: true,
          href: "/tes",
        },
      ],
    },
    component: () => import("@/views/Home.vue"),
  },
]