FROM node:16.18 AS build
WORKDIR /srvmgmt/react
# 不经常变的依赖部分拆分，方便用docker的缓存，减少构建时间
# 在.npmrc中配置私有和淘宝 registry，并使用固定版本的依赖
COPY package.json package-lock.json .npmrc ./
RUN npm install
# 复制源码，进行构建
COPY . .
# 有些umi版本需要先执行
RUN npm run build

# 版本固定为1.18.0
FROM nginx:1.18.0
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
WORKDIR /srvmgmt/react
## 将dist目录下的内容拷贝到 nginx/html 下
COPY --from=build /srvmgmt/react/dist /usr/share/nginx/html
## 禁止缓存 index.html 文件，防止重新登入js报错
RUN sed -i '10a if ($request_filename ~* .*\.(?:html)$)\n  {\n  add_header Cache-Control "no-store";\n  }' /etc/nginx/conf.d/default.conf
EXPOSE 80