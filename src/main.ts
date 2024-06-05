import { defineCustomElement } from "vue";
import "@vaadin/vaadin-lumo-styles";

import App from "./App.vue";
import HomePage from "./pages/HomePage.ce.vue";
import AboutPage from "./pages/AboutPage.ce.vue";
import PageNotFound from "./pages/PageNotFound.ce.vue";
import ChildCom from "./components/ChildCom.ce.vue";

// 注册自定义元素
const registerCustomElements = () => {
  customElements.define("my-app", defineCustomElement(App));
  customElements.define("home-page", defineCustomElement(HomePage));
  customElements.define("about-page", defineCustomElement(AboutPage));
  customElements.define("page-not-found", defineCustomElement(PageNotFound));
  customElements.define("child-com", defineCustomElement(ChildCom));
};

registerCustomElements();
