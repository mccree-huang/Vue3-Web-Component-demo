<template>
  <h2>this is home page also is a Web Component</h2>
  <child-com :title="title" />

  <!-- 表单筛选部分 -->
  <vaadin-horizontal-layout
    theme="spacing"
    class="filter-bar"
    style="margin-bottom: 16px; display: flex; align-items: flex-end"
  >
    <vaadin-text-field
      label="Name"
      :value="filters.name"
      @input="updateName"
    ></vaadin-text-field>
    <vaadin-number-field
      label="Min Age"
      :value="filters.minAge"
      @input="updateMinAge"
    ></vaadin-number-field>
    <vaadin-number-field
      label="Max Age"
      :value="filters.maxAge"
      @input="updateMaxAge"
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
import "@vaadin/grid";
import "@vaadin/horizontal-layout";
import "@vaadin/number-field";
import "@vaadin/text-field";
import { ref, computed } from "vue";

interface Item {
  name: string;
  age: number;
  email: string;
}

const title = ref(
  "I am a component-type Web Component, and my parent page is the Home Page."
);

const filters = ref<{
  name: string;
  minAge: number | null;
  maxAge: number | null;
}>({
  name: "",
  minAge: null,
  maxAge: null,
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
  console.log("filters", filters.value);
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

const updateName = (e: Event) => {
  filters.value.name = (e.target as HTMLInputElement).value;
};

const updateMinAge = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  filters.value.minAge = value ? parseInt(value) : null;
};

const updateMaxAge = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  filters.value.maxAge = value ? parseInt(value) : null;
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
