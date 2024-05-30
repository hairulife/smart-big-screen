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
    title: '区域定位',
    component: defineAsyncComponent(() => import('./modules/RegionalPositioning.vue'))
  },
  {
    title: '',
    style: {
      gridRow: '1 / 4',
      gridColumn: '2 / 3',
      zIndex: 1
    }
  },
  {
    title: '今日隐患违章情况'
  },
  {
    title: '车辆测速',
    component: defineAsyncComponent(() => import('./modules/VehicleSpeed.vue'))
  },
  {
    title: '不符合项分布情况'
  },
  {
    title: '智能电表当日用电统计',
    component: defineAsyncComponent(() => import('./modules/SmartMeter.vue'))
  },
  {
    title: '每日高风险情况'
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
