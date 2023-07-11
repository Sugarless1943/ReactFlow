import { message, notification } from "antd";
import axios, { AxiosRequestConfig } from "axios";
import NProgress from "nprogress";
import qs from "qs";
import urljoin from "url-join";
import formatMessage from "./formatMessage";

export const PLATFORM_BASE_URL = urljoin("../", "api");
export const BACKEND_BASE_URL = urljoin("../", "xyg-svr");

export default (baseOptions?: AxiosRequestConfig) => {
  const instance = axios.create({
    timeout: 10000, // 10s 内无响应就请求超时
    paramsSerializer(params: AxiosRequestConfig["params"]) {
      return qs.stringify(params, { arrayFormat: "brackets" });
    },
    ...baseOptions,
  });
  instance.interceptors.request.use(
    (config) => {
      const skipNprogress =
        config.skipNprogress ||
        (() => {
          // 默认请求平台的时序数据不显示 nprogress loading bar
          return (
            config.baseURL === PLATFORM_BASE_URL &&
            config.url === "/view/multimetric"
          );
        });
      if (!skipNprogress()) {
        NProgress.start();
      }
      return config;
    },
    (err) => {
      NProgress.done();
      // 这里极少情况会进来，暂时没有找到主动触发的方法，估计只有浏览器不兼容时才会触发
      // https://segmentfault.com/q/1010000020659252
      return Promise.reject(err);
    }
  );
  // 响应拦截器
  instance.interceptors.response.use(
    (res) => {
      NProgress.done();
      const { config, data, status } = res;
      const method = config.method?.toUpperCase() ?? "GET";
      const skipSuccessHandler =
        config.skipSuccessHandler ||
        (() => {
          // 默认只有 GET 请求不显示成功提示
          return method === "GET";
        });
      if (status >= 200 && status < 300 && !skipSuccessHandler()) {
        const msg = formatMessage(method, status, data.message);
        message.success(msg);
      }
      return res;
    },
    (err) => {
      NProgress.done();
      const { config, response, message: errMessage } = err;
      const method = config.method?.toUpperCase() ?? "GET";
      const skipErrorHandler =
        config.skipErrorHandler ||
        (() => {
          return false;
        });
      if (!skipErrorHandler()) {
        const msg = formatMessage(
          method,
          response?.status,
          response ? response.data.message : errMessage
        );
        const desc = `${method}: ${urljoin(
          "/",
          config.url.replace(/^(.*\/)/g, "")
        )}`;
        notification.error({
          message: msg,
          description: desc,
        });
      }
      return Promise.reject(err);
    }
  );
  return instance;
};
