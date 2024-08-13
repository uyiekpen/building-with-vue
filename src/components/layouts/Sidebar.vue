<template>
  <div
    :class="[
      'fixed md:static top-0 left-0 z-9999 flex h-screen w-[70px] md:w-[260px] flex-col overflow-y-hidden md:bg-[#F3F4F6] bg-white duration-300 ease-linear transition-transform border-r-2 p-4',
      { '-translate-x-full': !isOpen }

    ]"
  >
    <div>
      <img :src="logo" class="h-12 w-auto" />
    </div>
    <ul class="mt-2">
      <li v-for="item in menuItems" :key="item.name" class="mb-4">
        <router-link
          :to="item.path"
          class="flex items-center p-2 hover:bg-[#E2E4E7] rounded active:bg-[#E2E4E7]"
        >
          <font-awesome-icon :icon="item.icon" class="mr-2" />
          <span class="hidden md:inline">{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { faCog, faHome, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { defineProps, ref } from 'vue';
import logo from '../../assets/logo-light-full.png';

defineProps<{ isOpen: boolean }>();

const menuItems = ref([
  { name: 'Dashboard', path: '/dashboard', icon: faHome },
  { name: 'Product List', path: '/productlist', icon: faUsers },
  { name: 'Product Edit', path: '/settings', icon: faCog },
  { name: 'New Product', path: '/settings', icon: faCog },
  { name: 'Order list', path: '/settings', icon: faCog },
  { name: 'Order details', path: '/settings', icon: faCog },
]);
</script>
