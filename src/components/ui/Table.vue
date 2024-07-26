<template>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
            class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
          class="hover:bg-gray-100"
        >
          <td
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
            class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700"
          >
            <component v-if="cell.isComponent" :is="cell.component" v-bind="cell.props" />
            <span v-else v-html="cell.content"></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface TableCell {
  isComponent: boolean;
  component?: any;
  props?: object;
  content?: string;
}

defineProps({
  headers: {
    type: Array as () => string[],
    required: true
  },
  rows: {
    type: Array as () => TableCell[][],
    required: true
  }
});
</script>
5