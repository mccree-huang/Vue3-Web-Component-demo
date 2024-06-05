<template>
  <h4 class="title">{{ props.title }}</h4>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Web Component'
  }
});



</script>

<style scoped>
.title {
  color: #ff6600;
}
</style>