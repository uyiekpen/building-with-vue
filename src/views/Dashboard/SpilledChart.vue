<template>
  <div id="app">
    <div id="chart" class="w-[full] max-w-2xl bg-white p-4 rounded-lg border">
      <apexchart
        type="area"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

// You don't need to use defineProps for component registration
const series = ref([
  {
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41],
  },
]);

const chartOptions = ref({
  chart: {
    height: 350,
    type: 'area',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2018-09-19T00:00:00.000Z',
      '2018-09-19T01:30:00.000Z',
      '2018-09-19T02:30:00.000Z',
      '2018-09-19T03:30:00.000Z',
      '2018-09-19T04:30:00.000Z',
      '2018-09-19T05:30:00.000Z',
      '2018-09-19T06:30:00.000Z',
    ],
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },
});
</script>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    apexchart: VueApexCharts,
  },
});
</script>
