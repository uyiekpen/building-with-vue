<template>
  <div>
    <div class="flex justify-between mb-4">
      <h1 class="text-xl font-bold">Product</h1>
      <Button inputClass="border p-2 rounded " ButtonTitle=" Add Product" />
    </div>
    <Table :headers="tableHeaders" :rows="tableRows" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Table from '../../components/ui/Table.vue';
import type { Product } from '../../types/index';
import Trash from '../../components/ui/Trash.vue';
import Edit from "../../components/ui/Edit.vue"
import Button from "../../components/ui/Button.vue"

// Define table headers
const tableHeaders = ref(['Name', 'Category', 'Quantity', 'Status', 'Price']);


function getStatusText(status: number): string {
  if (status >= 0) {
    return 'out stock';
  } else if (status >= 22 && status <= 80) {
    return 'out of stock';
  } else if (status >= 41 && status <= 60) {
    return 'limited';
  } else {
    return 'unknown';
  }
}

// Define table rows
const tableRows = ref<any[]>([]);

const fetchProductList = async () => {
  const res = await import('../Dashboard/data/SalesData.json');

  const productData: Product[] = res.default.productsData;

  tableRows.value = productData.map(product => [
    {
      isComponent: false,
      content: `<div class="flex items-center">
        <img src="${product.img}" alt="${product.name}" class="w-8 h-8 mr-2" />
        ${product.name}
      </div>`
    },
    { isComponent: false, content: product.category },
    { isComponent: false, content: product.stock },
    { isComponent: false, content: getStatusText(product.stock) },
    { isComponent: false, content: `$${product.price}` },
    {
      isComponent: true,
      component: Trash,
      props: {}
    },
    {
      isComponent: true,
      component: Edit,
      props: {}
    }
  ]);
};

onMounted(fetchProductList);
</script>
