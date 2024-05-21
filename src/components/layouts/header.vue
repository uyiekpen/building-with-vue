<template>
  <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow">
    <div
      className="flex flex-grow items-center gap-2 justify-end py-4 px-4 shadow md:px-6 2xl:px-11"
    >
      <div className="flex items-center gap-2 sm:gap-4 ">
        <button @click="toggleSidebar" class="lg:hidden ">
          <font-awesome-icon :icon="faBars" />
        </button>
        <h1 class="text-xl">Admin Dashboard</h1>
        
      </div>
      <button
        className="inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium tracking-wide uppercase"
      >
        login
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const emit = defineEmits(['toggle-sidebar']);

const toggleSidebar = () => {
  emit('toggle-sidebar');
}
</script>
