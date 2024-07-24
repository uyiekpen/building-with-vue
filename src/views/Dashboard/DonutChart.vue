<template>
  <div id="app">
    <div class="chart-wrap w-full max-w-2xl bg-white p-4 rounded-lg  border h-[400px]">
      <apexchart
        type="donut"
        :width="380"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

const series = ref([44, 55, 13, 33]);

const chartOptions = ref({
  chart: {
    width: 380,
    height: 400,
    type: 'donut',
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  legend: {
    position: 'right',
    offsetY: 0,
    height: 230,
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
