<template>
  <h2>this is about page also is an Web Component</h2>
  <hello-world-com :title="title" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const title = ref("I am a component-type Web Component, and my parent page is the About Page.");
</script>
