<template>
  <button :class="inputClass">{{ButtonTitle}}</button>
</template>

<script setup lang="ts">
defineProps({

  ButtonTitle:{
    type: String,
      default: ''
  },
  inputClass:{
    type: String,
    default: ''
  }

})
</script>
