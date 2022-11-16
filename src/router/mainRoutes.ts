const MainRoutes = [
  {
    path: "/p/:postId",
    component: () => import("@/views/PostDetail/PostDetail.vue"),
    meta: {
      hideTabBar: true,
    },
  },
  // {
  //   path: "/u/:userId",
  //   component: () => import("@/views/UserDetail/UserDetail.vue"),
  //   meta: {
  //     hideTabBar: true,
  //   },
  // },
  // {
  //   path: "/login",
  //   component: () => import("@/views/LoginView/LoginView.vue"),
  //   meta: {
  //     hideTabBar: true,
  //   },
  // },
  // {
  //   path: "/editor",
  //   component: () => import("@/views/EditorView/EditorView.vue"),
  //   meta: {
  //     hideTabBar: true,
  //   },
  // },
  // {
  //   path: "/editor/:postId",
  //   component: () => import("@/views/EditorView/EditorView.vue"),
  //   meta: {
  //     hideTabBar: true,
  //   },
  // },
  // {
  //   path: "/u/:uid/followers",
  //   component: () => import("@/views/UserFollowers/UserFollowers.vue"),
  //   meta: {
  //     hideTabBar: true,
  //   },
  // },
  // {
  //   path: "/u/:uid/following",
  //   component: () => import("@/views/UserFollowing/UserFollowing.vue"),
  //   meta: {
  //     hideTabBar: true,
  //   },
  // },
];

export { MainRoutes };
