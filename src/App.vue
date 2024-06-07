<template>
  <div id="my-app">
    <component :is="activeComponent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import '@/assets/common.css'

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
