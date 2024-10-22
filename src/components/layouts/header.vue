<template>
  <header className="sticky top-0 z-999 flex w-full bg-white">
    <div
      className="flex flex-grow items-center gap-2 justify-between py-4 px-4 shadow md:px-6 2xl:px-11"
    >
      <div
        class="flex items-center gap-2 sm:gap-4 justify-between w-full lg:w-auto"
      >
        <!-- Sidebar Toggle and Logo -->
        <div class="flex items-center gap-2">
          <button @click="toggleSidebar" class="lg:hidden">
            <font-awesome-icon :icon="faBars" />
          </button>
          <div class="w-[70px] flex justify-between items-center">
            <img :src="logo" class="h-12 w-auto" />
          </div>
        </div>

        <!-- Search Icon (visible only on small screens) -->
        <div class=" hidden md:block">
          <font-awesome-icon :icon="faSearch" size="xl" />
        </div>
      </div>

      <!-- Right Section (User Icon, Notification, Settings) -->
      <div class="flex items-center gap-2 sm:gap-4 ">
        <!-- User Icon -->
        <img
          :src="usIcon"
          class="rounded-full w-8 h-8 sm:w-10 sm:h-10 object-cover hidden md:block"
        />

        <!-- Notifications and Settings (hidden on small screens) -->
        <div class="hidden  sm:flex items-center gap-2">
          <font-awesome-icon :icon="faBell" size="xl" />
          <font-awesome-icon :icon="faGear" size="xl" />
        </div>

        <!-- Admin Info -->
        <div class="flex items-center">
          <div class="h-8 w-8 sm:h-10 sm:w-10">
            <img :src="adnin" class="rounded-full w-full h-full object-cover" />
          </div>
          <span class="text-xs sm:text-sm pl-2 hidden md:block"
            >Admin<br />Carolyn Perkins</span
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import logo from '../../assets/logo.png';
import usIcon from "../../assets/us.png";
import adnin from "../../assets/1.jpg";
import { defineEmits } from 'vue';
import { faSearch, faBars, faGear } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const emit = defineEmits(['toggle-sidebar']);

const toggleSidebar = () => {
  emit('toggle-sidebar');
}
</script>
