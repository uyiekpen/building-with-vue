<template>
  <div class="flex items-center">
    <img :src="product.img" :alt="product.name" class="w-8 h-8 mr-2" />
    <span>{{ product.name }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { ProductSold } from '../../types/index';

defineProps<{ product: ProductSold }>();
</script>

<style scoped>
/* Add any additional styles here */
</style>
