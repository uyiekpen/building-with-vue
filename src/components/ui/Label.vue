<template>
    <label :for="htmlFor" :class="labelClass">{{ labelText }}</label>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  defineProps({
    htmlFor: {
      type: String,
      default: ''
    },
    labelClass: {
      type: String,
      default: ''
    },
    labelText: {
      type: String,
      default: ''
    }
  });
  </script>
  