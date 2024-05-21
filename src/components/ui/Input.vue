<template>
  <input
    :type="type"
    v-model="inputValue"
    @input="handleInput"
    :placeholder="placeholder"
    :class="inputClass"
  />
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits } from 'vue';

// Define props
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  value: {
    type: [String, Number, Boolean],
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  inputClass: {
    type: String,
    default: ''
  }
});

// Define reactive state
const inputValue = ref(props.value);

const emit = defineEmits(['update:modelValue']);

// Define event handler
const handleInput = (event: Event) => {
  inputValue.value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', inputValue.value);
};
</script>
