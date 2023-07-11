export default [
  {
    name: "首页",
    path: "/",
    component: "./Home",
  },
  {
    name: "无访问权限",
    path: "/403",
    component: "./Exception/403",
    hideInMenu: true,
  },
  {
    name: "服务器异常",
    path: "/500",
    component: "./Exception/500",
    hideInMenu: true,
  },
  {
    name: "页面加载出错",
    path: "/load-error",
    component: "./Exception/LoadError",
    hideInMenu: true,
  },
  {
    name: "无法访问页面",
    component: "./Exception/404",
    path: "*",
    hideInMenu: true,
  },
];
