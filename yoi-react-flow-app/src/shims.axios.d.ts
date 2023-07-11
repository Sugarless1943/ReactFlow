export {};

declare module "axios" {
  interface AxiosRequestConfig {
    /** 跳过 nprogress loading bar */
    skipNprogress?: () => boolean;
    /** 跳过成功提示 */
    skipSuccessHandler?: () => boolean;
    /** 跳过错误提示 */
    skipErrorHandler?: () => boolean;
  }
}
