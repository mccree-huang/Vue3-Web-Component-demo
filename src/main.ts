import { createApp, defineCustomElement } from "vue";
import App from "./App.vue";
const app = createApp(App);
import "@vaadin/vaadin-lumo-styles";
import './style.css'
// 将 Vue 组件转换为自定义元素
const MyAppElement = defineCustomElement(App);
// 注册自定义元素
customElements.define("my-app", MyAppElement);
// 挂载 Vue 应用
app.mount("#app");
