<template>
  <div>
    <div class="sales-stats mb-8">
      <div
        v-for="stat in salesStatistics"
        :key="stat.id"
        class="p-4 w-full bg-white rounded-md space-y-3 border"
      >
        <p class="capitalize font-bold text-[16px] leading-5">
          {{ stat.title }}
        </p>
        <div class="flex items-center justify-between">
          <div>
            <h5 class="text-2xl font-semibold">{{ stat.amount }}</h5>
            <span class="text-gray-400 font-light">{{stat.date}}</span>
          </div>
          <p
            :class="[
              stat.status === 'profit' ? 'text-green-500 bg-[#D1FAE5] font-bold' : 'text-red-500 bg-[#FEE2E2]',
              'flex items-center justify-between rounded-full py-1 px-3 font-semibold text-[12px] leading-4'
            ]"
          >
            <!-- <BsPlus /> -->
            {{ stat.percentage }}
            <!-- <IoMdTrendingUp /> -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { BsPlus } from 'vue-icons/bs';
// import { IoMdTrendingUp } from 'vue-icons/io';

const salesStatistics = [
  {
    id: 0,
    title: "Revenue",
    amount: "$21,827.13",
    date: "vs. 3 months prior to 17 Apr",
    percentage: "11.4%",
    status: "profit",
  },
  {
    id: 1,
    title: "Orders",
    amount: "1,758",
    date: "vs. 3 months prior to 17 Apr",
    percentage: "3.2%",
    status: "lost",
  },
  {
    id: 2,
    title: "Purchases",
    amount: "$7,249.31",
    date: "vs. 3 months prior to 17 Apr",
    percentage: "11.01%",
    status: "profit",
  },
] as const;
</script>

<style scoped></style>
