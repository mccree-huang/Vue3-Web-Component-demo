<template>
  <vaadin-button @click="switchComponent">Switch Web Component</vaadin-button>
  <component :is="activeComponent" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";

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
  },
  setup(props) {
    const activeComponent = ref(props.route); // 初始组件

    const switchComponent = () => {
      activeComponent.value =
        activeComponent.value === "home-page-com"
          ? "about-page-com"
          : "home-page-com";
    };

    return {
      activeComponent,
      switchComponent,
    };
  },
});
</script>
