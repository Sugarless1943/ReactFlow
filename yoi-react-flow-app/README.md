# 使用@umijs/max 如有遇问题请看官方文档

- `@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://next.umijs.org/zh-CN/docs/max/introduce)

## 说明

- 基于 umijs 开发的优也前端脚手架

## 基本信息

| 类别               | 说明                                      |
| ------------------ | ----------------------------------------- |
| 模板版本           | 1.0.0                                     |
| 核心依赖           | umi@4.0.13                                |
| 编码规范和代码质量 | @umijs/max 可在 src/.umi 文件中查看其规范 |

## 目录结构

```json
.
├── dist // 构建产物目录
├── mock // 本地模拟数据
├── src // 源码
│   ├── .umi // dev 时的临时文件目录
│   ├── .umi-production // build 时的临时文件目录
│   ├── api // 接口服务
│   ├── assets // 静态资源
│   ├── components // 自定义业务组件
│   ├── hooks // 自定义业务 Hooks
│   ├── layouts // 全局布局
│   ├── models // 应用级数据状态
│   ├── pages // 路由组件/页面
│   ├── utils // 工具函数
│   ├── access.ts // 权限配置
│   ├── app.ts // 运行时配置
│   ├── global.less // 全局样式
│   ├── favicon.ico // 应用的shortcut icon
│   ├── loading.tsx // 定义懒加载过程中要显示的加载动画
│   └── routes.ts // 全局路由配置
├── .umirc.ts // umi配置
└── Dockerfile // Docker 构建文件

```

## 使用注意

1. 生成 api docs：`需修改 package.json > scripts > gen-open-api 命令中的 http://localhost:8000/xinyegang/qms/v2/api-docs 地址中的 /xinyegang/qms 为当前项目代理的后端服务名称，启动项目，运行 npm run gen-open-api 生成 api docs`

2. 项目遵循 Commit Message 规范 `全局安装 npm install -g commitizen 即可使用 git cz 命令使用规范模式 [规范说明]https://yo-i.yuque.com/cgil5m/drz87d/gagbv6`

3. 未采用 @umijs/plugin-request 提供的网络请求和错误处理方案，要求全局只使用一个 api client 来处理所有的网络请求，所以：

   - ❌：`import { request, useRequest } from 'umi'`
   - ✅：`import apiClient from '@/api'` + `import { useRequest } from 'ahooks'`

4. 自带 Loading 页、数据加载中组件

5. 自带异常页（包含：403，404，500，页面加载错误）、数据加载错误组件。

6. 自带 nprogress loading bar

7. 默认布局为 Ant Design 的 [ProLayout](https://procomponents.ant.design/components/layout)，支持它全部配置项，可视需求更换

8. 未带字体，需自行下载配置
