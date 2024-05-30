import { defineCustomElement } from 'vue';
import HomePage from './pages/HomePage.ce.vue';
import AboutPage from './pages/AboutPage.ce.vue';

const HomePageCom = defineCustomElement(HomePage);
const AboutPageCom = defineCustomElement(AboutPage);

export function register() {
  // 在这里，应该使用逗号分隔的列表来定义多个自定义元素
  // 以确保每个自定义元素都能正确注册
  customElements.define('home-page-com', HomePageCom);
  customElements.define('about-page-com', AboutPageCom);
}
