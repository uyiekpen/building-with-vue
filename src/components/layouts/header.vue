<template>
  <header className="sticky top-0 z-999 flex w-full bg-white ">
    <div
      className="flex flex-grow items-center  gap-2 justify-between py-4 px-4 shadow md:px-6 2xl:px-11"
    >
      <div className="flex items-center gap-2 sm:gap-4 justify-center ">
        <button @click="toggleSidebar" class="lg:hidden ">
          <font-awesome-icon :icon="faBars" />
        </button>
        <div class=" w-[70px] flex justify-between items-center lg:hidden">
          <img :src="logo" class="h-12 w-auto" />
          <font-awesome-icon :icon="faSearch" size="xl" />
        </div>
      </div>
      <div class="flex justify-between items-center w-[300px]">
        <img
          :src="usIcon"
          class="rounded-full max-w-full h-auto object-cover"
        />
        <div><font-awesome-icon :icon="faBell" size="xl" /></div>
        <div><font-awesome-icon :icon="faGear" size="xl" /></div>
        <div class="flex">
          <div class="h-10 w-10 ">
            <img
              :src="adnin"
              class="rounded-full max-w-full h-auto object-cover"
            />
          </div>
          <span class="text-sm pl-1">Admin <br />Carolyn Perkins</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import logo from '../../assets/logo.png';

import usIcon from "../../assets/us.png"
import adnin from "../../assets/1.jpg"
import { defineEmits } from 'vue';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const emit = defineEmits(['toggle-sidebar']);

const toggleSidebar = () => {
  emit('toggle-sidebar');
}
</script>
