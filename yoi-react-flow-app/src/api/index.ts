import { Configuration, UserApi } from "./docs";
import createAxiosInstance, {
  BACKEND_BASE_URL,
  PLATFORM_BASE_URL,
} from "./utils/createAxiosInstance";

const instance = createAxiosInstance({
  baseURL: PLATFORM_BASE_URL, // instance 默认连接的是平台数据
});

const backendConfig = new Configuration({
  basePath: BACKEND_BASE_URL,
});

const user = new UserApi(backendConfig, undefined, instance);

export default {
  instance,
  user,
};
