import { defineConfig } from 'umi';
import routes from './config/config'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // treeShaking: true, //去除那些引用的但却没有使用的代码
  antd: {},
  dva: {
    hmr: true,
  },
  routes: routes,
  fastRefresh: {},
  ignoreMomentLocale: true,
  //代理请求
  proxy: {
    "/api": {
      "target": "http://localhost:8080",
      // "target": "http://localhost:6789",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
});
