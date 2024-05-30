<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Web Component'
  }
});
</script>

<template>
  <h4 style="color: #ff6600;">{{ title }}</h4>
  <vaadin-button theme="primary" >hi mccree click me</vaadin-button>
</template>

<style scoped>

</style>