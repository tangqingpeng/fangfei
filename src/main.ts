import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import TDesign from 'tdesign-vue-next';
// import 'tdesign-vue-next/es/style/index.css';
// import './assets/css/global.scss'
const app = createApp(App)
// app.use(TDesign);
app.use(router)
app.mount('#app')
