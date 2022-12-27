import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/style/common.css';
import './assets/style/normalize.css';

import './mock/index.js';

createApp(App).use(router).mount('#app');
