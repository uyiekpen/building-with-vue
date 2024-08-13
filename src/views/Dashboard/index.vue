<template>
  <div class="flex flex-col p-4 lg:p-8">
    <div class="lg:flex items-center justify-between mb-4 gap-3">
      <div class="mb-4 lg:mb-0">
        <h3 class="text-2xl font-bold">Sales Overview</h3>
        <p>View your current sales & summary</p>
      </div>
      <div class="flex flex-col lg:flex-row lg:items-center gap-3">
        <!-- Additional items can be added here if needed -->
      </div>
    </div>
    <Revenue />
    <div class="chart-stats mb-8 flex flex-col lg:flex-row lg:space-x-4">
      <div class="mb-4 lg:mb-0 flex-1 w-[280px] md:w-full">
        <SpilledChart />
      </div>
      <div class="mb-4 lg:mb-0 flex-1  w-[280px] md:w-full">
        <DonutChart />
      </div>
    </div>
    <div class="flex flex-col lg:flex-row w-full justify-between gap-3">
      <div
        class="w-full lg:w-[65%] border rounded p-6 mb-4 lg:mb-0 hidden md:block"
      >
        <div class="flex justify-between mb-4">
          <h1 class="text-xl font-bold">Latest Orders</h1>
          <Button
            :inputClass="'border p-2 rounded'"
            :ButtonTitle="'View Orders'"
          />
        </div>
        <Table :headers="tableHeaders" :rows="tableRows" />
      </div>

      <div class=" lg:w-[35%] border rounded p-6  w-[280px] md:w-full">
        <div class="flex justify-between mb-4">
          <h1 class="text-xl font-bold">Top Selling</h1>
          <Button
            :inputClass="'border p-2 rounded'"
            :ButtonTitle="'View Products'"
          />
        </div>
        <Table :headers="tableHeaders2" :rows="tableRows2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from "../../components/ui/Button.vue";
import Table from "../../components/ui/Table.vue";
import type { Order, ProductSold, SalesDashboardData } from '../../types/index'; // Adjust the import path as needed
import DonutChart from './DonutChart.vue';
import Revenue from './Revenue.vue';
import SpilledChart from "./SpilledChart.vue";
import ProductCell from "../../components/ui/ProductCell.vue"; // Adjust the import path as needed

interface TableCell {
  isComponent: boolean;
  component?: any;
  props?: object;
  content?: string;
}

const tableHeaders = ref(['Order', 'Date', 'Customer', 'Status', 'Total']);
const tableHeaders2 = ref(['Product', 'Sold']);

const tableRows = ref<TableCell[][]>([]);
const tableRows2 = ref<TableCell[][]>([]);

function getStatusText(status: number): string {
  switch (status) {
    case 0:
      return "Pending";
    case 1:
      return "Completed";
    case 2:
      return "Cancelled";
    default:
      return "Unknown";
  }
}

async function fetchSalesData() {
  try {
    const response = await import('./data/SalesData.json') as { default: { salesDashboardData: SalesDashboardData } };
    const ordersData: Order[] = response.default.salesDashboardData.latestOrderData;
    const productData: ProductSold[] = response.default.salesDashboardData.topProductsData;

    tableRows.value = ordersData.map(order => [
      { isComponent: false, content: `#${order.id}` },
      { isComponent: false, content: new Date(order.date * 1000).toLocaleDateString() },
      { isComponent: false, content: order.customer },
      { isComponent: false, content: getStatusText(order.status) },
      { isComponent: false, content: `$${order.totalAmount}` }
    ]);

    tableRows2.value = productData.map(product => [
      { isComponent: true, component: ProductCell, props: { product } },
      { isComponent: false, content: product.sold.toString() }
    ]);
  } catch (error) {
    console.error('Error fetching sales data:', error);
  }
}

onMounted(fetchSalesData);
</script>
