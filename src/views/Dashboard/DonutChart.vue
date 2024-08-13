<template>
  <div id="app">
    <div class="chart-wrap w-full max-w-2xl bg-white p-4 rounded-lg border h-[400px]">
      <apexchart
        type="donut"
        :width="chartWidth"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

// Determine the chart width based on the window size
const chartWidth = computed(() => {
  if (window.innerWidth < 480) {
    return 200;
  }
  return 380;
});

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

<style scoped>
.chart-wrap {
  max-width: 100%;
  margin: 0 auto;
}

@media (max-width: 480px) {
  .chart-wrap {
    padding: 2rem 1rem;
    height: auto;
  }
}
</style>
