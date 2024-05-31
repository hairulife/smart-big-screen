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
    title: '设备区域信息',
    style: {
      gridRow: '1 / 4',
      gridColumn: '1 / 2'
    },
    component: defineAsyncComponent(() => import('./modules/DeviceRegion.vue'))
  },
  {
    title: '',
    style: {
      gridRow: '1 / 4',
      gridColumn: '2 / 3',
      zIndex: -1
    },
    component: defineAsyncComponent(() => import('../home/modules/Center.vue'))
  },
  {
    title: 'AI 告警列表',
    component: defineAsyncComponent(() => import('../home/modules/AiAlerts.vue'))
  },
  {
    title: '人工抓拍列表',
    component: defineAsyncComponent(() => import('./modules/ManualCapture.vue'))
  },
  {
    title: '监控设备统计',
    component: defineAsyncComponent(() => import('./modules/EquipmentStatistics.vue'))
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
