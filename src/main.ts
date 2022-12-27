import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import 'element-plus/es/components/message/style/css'
import './assets/style/common.css';
import './assets/style/normalize.css';

import './mock/index.js';

createApp(App).use(router).use(ElementPlus, {
  locale: zhCn,
}).mount('#app');
