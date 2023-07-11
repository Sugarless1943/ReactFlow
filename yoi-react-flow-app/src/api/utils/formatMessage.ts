/**
 * 格式化请求消息
 * @param method 请求方法
 * @param status 状态码
 * @param message 响应消息
 * @returns
 */
export default (method: string, status?: number, message?: string) => {
  if (status) {
    if (status >= 200 && status < 300) {
      if (message) return message;
      switch (method) {
        case "GET":
          return "查询成功";
        case "POST":
          return "新建/查询成功";
        case "DELETE":
          return "删除成功";
        case "PATCH":
          return "更新成功";
        default:
          return "操作成功";
      }
    }
    if (status >= 400 && status < 500) {
      if (message) return `${status}: ${message}`;
      switch (status) {
        case 401:
          return "401: 请求未授权，请检查您的登录状态是否过期";
        case 403:
          return "403: 请求无权限，请联系您的系统管理员";
        case 404:
          return "404: 资源不存在，请检查您的请求设置";
        default:
          return "请求错误，请检查您的请求设置";
      }
    }
    if (status >= 500 && status < 600) {
      switch (status) {
        case 502:
          return "502: 网关错误，请等待片刻后重试";
        case 503:
          return "503: 服务不可用，请等待片刻后重试";
        case 504:
          return "504: 网关超时，请等待片刻后重试";
        default:
          return "服务器错误，请等待片刻后重试";
      }
    }
  }
  if (message?.startsWith("timeout")) return "请求超时，请等待片刻后重试";
  if (message?.startsWith("Network Error"))
    return "请求无响应，请检查您的请求或网络设置";
  return "无提示";
};
