<template>
    <div :class="['absolute left-0 top-0 z-9999 flex h-screen md:w-[260px] w-72.5  flex-col overflow-y-hidden md:bg-[#F3F4F6] bg-white duration-300 ease-linear lg:static lg:translate-x-0 border-r-2 p-4 transition-transform', { '-translate-x-full': !isOpen }]">
      <ul>
        <li v-for="item in menuItems" :key="item.name" class="mb-4">
          <router-link :to="item.path" class="flex items-center p-2 hover:bg-gray-700 rounded">
            <font-awesome-icon :icon="item.icon" class="mr-2" />
            <span class="hidden md:inline">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faHome, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';
  
  const props = defineProps<{ isOpen: boolean }>();
  
  const menuItems = ref([
    { name: 'Home', path: '/', icon: faHome },
    { name: 'Users', path: '/users', icon: faUsers },
    { name: 'Settings', path: '/settings', icon: faCog },
  ]);
  </script>
  