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
    title: '广播模式',
    component: defineAsyncComponent(() => import('./modules/BroadcastMode.vue'))
  },
  {
    title: '',
    component: defineAsyncComponent(() => import('../home/modules/Center.vue')),
    style: {
      gridRow: '1 / 4',
      gridColumn: '2 / 3',
      zIndex: -1
    }
  },
  {
    title: '广播数量统计',
    component: defineAsyncComponent(() => import('./modules/BroadcastStatistics.vue'))
  },
  {
    title: '应急广播',
    component: defineAsyncComponent(() => import('./modules/EmergencyBroadcast.vue'))
  },

  {
    title: '今日广播数量',
    component: defineAsyncComponent(() => import('./modules/TodayBroadcast.vue'))
  },
  {
    title: '正常广播',
    component: defineAsyncComponent(() => import('./modules/NormalBroadcast.vue'))
  },
  {
    title: '设备状态统计',
    component: defineAsyncComponent(() => import('./modules/DeviceStatus.vue'))
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
