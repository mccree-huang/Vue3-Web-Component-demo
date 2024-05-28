<script setup lang="ts">
// 导入 PropType 来定义 prop 类型

// 定义 title prop，类型为 string，并可选地设置默认值
defineProps({
  title: {
    type: String,
    default: 'Web Component'
  }
});
</script>

<template>
  <h4 style="color: #ff6600;">{{ title }}</h4>
</template>

<style scoped>

</style>