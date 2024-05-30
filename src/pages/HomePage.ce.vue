<template>
  <h2>this is home page also is an Web Component</h2>
  <child-com :title="title" />
  <!-- 表单筛选部分 -->
  <vaadin-horizontal-layout theme="spacing" class="filter-bar">
    <vaadin-text-field label="Name" v-model="filters.name"></vaadin-text-field>
    <vaadin-number-field
      label="Min Age"
      v-model="filters.minAge"
    ></vaadin-number-field>
    <vaadin-number-field
      label="Max Age"
      v-model="filters.maxAge"
    ></vaadin-number-field>
    <vaadin-button theme="primary" @click="applyFilters"
      >Apply Filters</vaadin-button
    >
  </vaadin-horizontal-layout>

  <!-- 表格部分 -->
  <vaadin-grid :items="paginatedItems" class="data-grid">
    <vaadin-grid-column path="name" header="Name"></vaadin-grid-column>
    <vaadin-grid-column path="age" header="Age"></vaadin-grid-column>
    <vaadin-grid-column path="email" header="Email"></vaadin-grid-column>
  </vaadin-grid>

  <!-- 分页部分 -->
  <div class="pagination-bar">
    <vaadin-button @click="prevPage" :disabled="currentPage === 1"
      >Previous</vaadin-button
    >
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <vaadin-button @click="nextPage" :disabled="currentPage === totalPages"
      >Next</vaadin-button
    >
  </div>
</template>

<script lang="ts" setup>
import ChildCom from "../components/ChildCom.vue";
import "@vaadin/button";
import '@vaadin/grid';

interface Item {
  name: string;
  age: number;
  email: string;
}
import { ref, computed } from "vue";
const title = ref(
  "I am a component-type Web Component, and my parent page is the Home Page."
);

const filters = ref({
  name: "",
  minAge: null as number | null,
  maxAge: null as number | null,
});

const items = ref<Item[]>([]);
const currentPage = ref(1);
const pageSize = 10;

const filteredItems = computed(() => {
  return items.value.filter((item) => {
    const matchesName = filters.value.name
      ? item.name.includes(filters.value.name)
      : true;
    const matchesMinAge =
      filters.value.minAge !== null ? item.age >= filters.value.minAge : true;
    const matchesMaxAge =
      filters.value.maxAge !== null ? item.age <= filters.value.maxAge : true;
    return matchesName && matchesMinAge && matchesMaxAge;
  });
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = currentPage.value * pageSize;
  return filteredItems.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredItems.value.length / pageSize);
});

const applyFilters = () => {
  currentPage.value = 1; // Reset to first page when filters are applied
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

// 生成大量数据
for (let i = 1; i <= 100; i++) {
  items.value.push({
    name: `Name ${i}`,
    age: Math.floor(Math.random() * 50) + 20,
    email: `name${i}@example.com`,
  });
}
</script>

<style scoped>
.filter-bar {
  margin-bottom: 16px;
  display: flex;
  align-items: flex-end;
}

.data-grid {
  height: 400px;
  margin-bottom: 16px;
}

.pagination-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination-bar span {
  margin: 0 8px;
}
</style>../components/child.vue
