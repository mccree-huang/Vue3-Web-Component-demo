import { createApp, defineCustomElement } from 'vue';
import App from './App.vue';
// import {register} from './registerMyComponent'
// 创建一个 Vue 应用
const app = createApp(App);

// 将 Vue 组件转换为自定义元素
const MyAppElement = defineCustomElement(App);
// register()

// 注册自定义元素
customElements.define('my-app', MyAppElement);

// 挂载 Vue 应用
app.mount('#app');
