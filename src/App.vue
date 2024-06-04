<template>
  <component :is="activeComponent" />
</template>

<script lang="ts">
import './style.css'
import { defineComponent, ref } from "vue";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import PageNotFound from "./pages/PageNotFound.vue";
export default defineComponent({
  props: {
    route: {
      type: String,
      default: "home-page-com",
    },
  },
  components: {
    "about-page-com": AboutPage,
    "home-page-com": HomePage,
    "page-not-found": PageNotFound,
  },
  setup(props) {
    const activeComponent = ref(props.route); // 初始组件
    return {
      activeComponent,
    };
  },
});
</script>
