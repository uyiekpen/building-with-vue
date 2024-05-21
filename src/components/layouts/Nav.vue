<template>
  <div id="app" class="flex h-screen">
    <Sidebar :isOpen="isSidebarOpen" />
    <div class="flex-1 flex flex-col">
      <Header @toggle-sidebar="toggleSidebar" />
      <div class="p-4 flex-1 overflow-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Header from "./header.vue";
import Sidebar from "./Sidebar.vue";

const isSidebarOpen = ref(true);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>
