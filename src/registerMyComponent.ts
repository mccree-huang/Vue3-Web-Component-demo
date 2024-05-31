// componentRegistry.ts

import { defineAsyncComponent } from 'vue';

const components = {
  'home-page-com': defineAsyncComponent(() => import('./pages/HomePage.vue')),
  'about-page-com': defineAsyncComponent(() => import('./pages/AboutPage.vue')),
  // Add more components here
};

export default components;
