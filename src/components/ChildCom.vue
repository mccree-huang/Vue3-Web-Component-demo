<template>
  <h4 class="title" style="color: #ff6600;">{{ props.title }}</h4>
  <vaadin-button theme="primary" @click="handleBtnClick">hi mccree click me</vaadin-button>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Web Component'
  }
});

const handleBtnClick = () => {
  console.log('clicked123');
}

</script>