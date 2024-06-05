<template>
  <component :is="activeComponent" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  props: {
    route: {
      type: String,
      default: "home-page",
    },
  },
  setup(props) {
    const activeComponent = ref(props.route); // 初始组件
    return {
      activeComponent,
    }
  },
})
</script>
