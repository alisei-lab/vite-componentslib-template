import { createApp } from 'vue';
import App from './App.vue';

import libComponents from '../src/main';

const app = createApp(App);
app.use(libComponents);
app.mount('#app');
