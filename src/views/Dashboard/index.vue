<template>
  <div class="flex flex-col">
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
    <div class="chart-stats mb-8">
      <SpilledChart />
      <DonutChart />
    </div>
    <div class="flex w-full justify-between gap-3">
      <div class="w-[65%] border rounded p-6">
        <div class="flex justify-between mb-4">
          <h1 class="text-xl font-bold">Latest Orders</h1>
          <Button inputClass="border p-2 rounded " ButtonTitle="View Orders" />
        </div>
        <Table :headers="tableHeaders" :rows="tableRows" />
      </div>

      <div class="w-[35%] border rounded p-6">
        <div class="flex justify-between mb-4">
          <h1 class="text-xl font-bold">Top Selling</h1>
          <Button
            inputClass="border p-2 rounded "
            ButtonTitle="View Products"
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
import type { Order,ProductSold, SalesDashboardData } from '../../types/index'; // Adjust the import path as needed
import DonutChart from './DonutChart.vue';
import Revenue from './Revenue.vue';
import SpilledChart from "./SpilledChart.vue";

// Define the table headers
const tableHeaders = ref(['Order', 'Status', 'Date', 'Customer', 'Total']);

const tableHeaders2 = ref(['Product' ,'SOLD'])

// Define the table rows, initially empty
const tableRows = ref<any[]>([]);
const tableRows2 = ref<any[]>([]);


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
  const response = await import('./data/SalesData.json') as { default: { salesDashboardData: SalesDashboardData } };

  // Access the nested data correctly
  const ordersData: Order[] = response.default.salesDashboardData.latestOrderData;

  const productData : ProductSold[] = response.default.salesDashboardData.topProductsData

  // Map the data to table rows
  tableRows.value = ordersData.map(order => [
`#${order.id}`,
new Date(order.date * 1000).toLocaleDateString(), // Convert UNIX timestamp to readable date
    order.customer,
    getStatusText(order.status),
    `$${order.totalAmount}`
  ]);

  //table 2

  tableRows2.value = productData.map(product => [
    product.name,
    product.sold,
  ])




}

// Fetch sales data on component mount
onMounted(fetchSalesData);
</script>
