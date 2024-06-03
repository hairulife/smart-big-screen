<template>
  <div class="cockpit-home">
    <CardComp v-for="card in cards" :key="card.title" :title="card.title" :style="card.style">
      <component :is="card.component" />
    </CardComp>
  </div>
</template>

<script setup>
import CardComp from '@/views/cockpit/components/CardComp.vue'
import { defineAsyncComponent } from 'vue'

const cards = [
  {
    title: '车辆管理',
    component: defineAsyncComponent(() => import('./modules/VehicleManagement.vue'))
  },
  {
    title: '',
    style: {
      gridRow: '1 / 4',
      gridColumn: '2 / 3',
      '--z-index-bg': -1
    },
    component: defineAsyncComponent(() => import('../home/modules/Center.vue'))
  },
  {
    title: '车辆测速',
    style: {
      gridRow: '1 / 3',
      gridColumn: '3 / 4',
      '--z-index-bg': -1
    },
    component: defineAsyncComponent(() => import('../home/modules/VehicleSpeed.vue'))
  },
  {
    title: '各单位违章车辆占比',
    component: defineAsyncComponent(() => import('./modules/ViolationRatio.vue'))
  },
  {
    title: '超速占比',
    component: defineAsyncComponent(() => import('./modules/SpeedingRatio.vue'))
  },
  {
    title: '按门岗统计',
    component: defineAsyncComponent(() => import('./modules/GateStatistics.vue'))
  }
]
</script>

<style lang="scss" scoped>
.cockpit-home {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
}
</style>
