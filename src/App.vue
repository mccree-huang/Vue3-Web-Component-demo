<template>
  <vaadin-button @click="switchComponent">Switch Web Component</vaadin-button>
  <component :is="activeComponent" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
interface Props {
  route?: string;
}

export default defineComponent({
  props: {
    // 使用 Props 类型定义 props
    route: String,
  },
  setup(props:Props) {
    console.log(props, "props");

    const { route = "home-page-com" } = props;
    const activeComponent = ref(route); // 初始组件

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
