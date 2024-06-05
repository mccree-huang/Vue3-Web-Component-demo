<template>
  <h2>this is home page also is a Web Component</h2>
  <child-com :title="title" />
  <!-- 表单筛选部分 -->
  <vaadin-horizontal-layout theme="spacing" class="filter-bar">
    <vaadin-text-field label="Name" :value="filters.name" @input="updateName"></vaadin-text-field>
    <vaadin-number-field label="Min Age" :value="filters.minAge" @input="updateMinAge"></vaadin-number-field>
    <vaadin-number-field label="Max Age" :value="filters.maxAge" @input="updateMaxAge"></vaadin-number-field>
    <vaadin-date-picker label="Start date"></vaadin-date-picker>
    <vaadin-button theme="primary" @click="applyFilters">Apply Filters</vaadin-button>
    <vaadin-button theme="primary" @click="handleOpenDialog">open Dialog</vaadin-button>
  </vaadin-horizontal-layout>
  <!-- 表格部分 -->
  <vaadin-grid :items="paginatedItems" class="data-grid">
    <vaadin-grid-column path="name" header="Name"></vaadin-grid-column>
    <vaadin-grid-column path="age" header="Age"></vaadin-grid-column>
    <vaadin-grid-column path="email" header="Email"></vaadin-grid-column>
  </vaadin-grid>

  <!-- 分页部分 -->
  <div class="pagination-bar">
    <vaadin-button @click="prevPage" :disabled="currentPage === 1">Previous</vaadin-button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <vaadin-button @click="nextPage" :disabled="currentPage === totalPages">Next</vaadin-button>
  </div>

  <vaadin-confirm-dialog header='Delete "Report Q4"?' cancel-button-visible confirm-text="Delete"
    confirm-theme="error primary" .opened="dialogOpened" @confirm="onConfirm" @cancel="() => { dialogOpened = false }">
    There are unsaved changes. Do you want to discard or save them?
  </vaadin-confirm-dialog>
</template>

<script lang="ts" setup>
import "@vaadin/button";
import "@vaadin/grid";
import "@vaadin/horizontal-layout";
import "@vaadin/number-field";
import "@vaadin/text-field";
import "@vaadin/confirm-dialog";
import "@vaadin/date-picker"
import { ref, computed } from "vue";

interface Item {
  name: string;
  age: number;
  email: string;
}

const title = ref(
  "I am a component-type Web Component, and my parent page is the Home Page."
);

const dialogOpened = ref(false);


const onConfirm = () => {
  dialogOpened.value = false;
};

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

const handleOpenDialog = () => {
  dialogOpened.value = true;
}
</script>

<style scoped>
.filter-bar {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
}

.pagination-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
</style>
