// 运行时配置
import { RunTimeLayoutConfig } from "@umijs/max";

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
export async function getInitialState() {}

// layout 配置
export const layout: RunTimeLayoutConfig = (data) => {
  return {
    pure: true,
    title: '退火炉能效管理系统'
  }
}
