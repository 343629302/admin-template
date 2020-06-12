import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home/index",
    meta: {
      title: "首页",
      icon: "el-icon-monitor"
    },
    children: [
      {
        path: "/home/index",
        name: "home",
        meta: {
          keepAlive: true
        },
        component: () => import("@/views/home/index.vue")
      }
    ]
  },
  {
    path: "/page1",
    component: Layout,
    redirect: "/page1/index",
    meta: {
      title: "首页",
      icon: "el-icon-monitor"
    },
    children: [
      {
        path: "/page1/index",
        name: "home",
        meta: {
          title: "首页"
        },
        component: () => import("@/views//page1/index.vue")
      },
      {
        path: "/page1/page",
        name: "home",
        meta: {
          title: "首页"
        },
        component: () => import("@/views//page1/page.vue")
      }
    ]
  },
  {
    path: "/page2",
    component: Layout,
    redirect: "/page2/index",
    meta: {
      title: "首页",
      icon: "el-icon-monitor"
    },
    children: [
      {
        path: "/page2/index",
        name: "home",
        meta: {
          title: "首页"
        },
        component: () => import("@/views//page2/index.vue")
      },
      {
        path: "/page2/page",
        name: "home",
        meta: {
          title: "首页"
        },
        component: () => import("@/views//page2/page.vue")
      }
    ]
  }
];

//防止点击重复路由的时候报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  routes
});

export default router;
