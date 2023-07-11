import { defineConfig } from "@umijs/max";
import routes from "./src/routes";

const proxyBase = {
  changeOrigin: true,
  secure: false,
  onProxyReq(proxyReq: { setHeader: (arg0: string, arg1: string) => void }) {
    proxyReq.setHeader(
      "cookie",
      "thingswise.web.proxy.session_id=s%3AV1G8Gc0pP4YdacOG2Nl993Fgj6yABPYq.EXTbZmZhciJJ%2BjEvP27gqDgQ8AH%2B%2Bb%2FwMORuiOjMLGQ"
    );
  },
};

export default defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  model: {},
  // 开启antd
  antd: {},
  // 权限配置开启。同时需要 src/access.ts 提供权限配置
  access: {},
  // access 插件依赖 initial State 所以需要同时开启
  initialState: {},
  // 使用umi内置封装请求
  request: {},
  // 打包文件名包含 hash 后缀
  hash: true,
  // 开启 layout 布局
  layout: {},
  // 快速刷新
  fastRefresh: true,
  // 使用 hash 路由
  history: {
    type: "hash",
  },
  // 路由
  routes,
  // 代理
  proxy: {
    // 平台 api
    "/api": {
      ...proxyBase,
      // 根据租户自行更换
      target: "https://app-test.yo-i.com.cn/xinyegang/qms",
    },
    // 后端 api
    "/xyg-svr": {
      ...proxyBase,
      // 根据租户自行更换
      target: "https://app-test.yo-i.com.cn/xinyegang/qms",
    },
  },
  npmClient: "npm",
});
