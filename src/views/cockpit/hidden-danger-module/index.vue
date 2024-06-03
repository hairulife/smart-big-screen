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
    title: '',
    style: {
      gridColumn: '1 / 4',
      '--z-index-bg': -1
    },
    component: defineAsyncComponent(() => import('./modules/NavInfo.vue'))
  },
  {
    title: '隐患类型统计',
    component: defineAsyncComponent(() => import('./modules/HiddenDangerType.vue'))
  },
  {
    title: '趋势图',
    style: {
      '--z-index-bg': -1
    },
    component: defineAsyncComponent(() => import('./modules/Trend.vue'))
  },
  {
    title: '各区域隐患数据',
    component: defineAsyncComponent(() => import('./modules/HiddenDangerDataRegion.vue'))
  }
]
</script>

<style lang="scss" scoped>
.cockpit-home {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  gap: 10px;
}
</style>
