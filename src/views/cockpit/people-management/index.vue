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
    title: '人员定位',
    style: {
      gridRow: '1 / 4',
      gridColumn: '1 / 2'
    },
    component: defineAsyncComponent(() => import('./modules/PersonnelPositioning.vue'))
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
    title: '人员类型',
    component: defineAsyncComponent(() => import('./modules/PersonType.vue'))
  },
  {
    title: '男女占比',
    component: defineAsyncComponent(() => import('./modules/GenderRatio.vue'))
  },
  {
    title: '年龄分布',
    component: defineAsyncComponent(() => import('./modules/AgeDistribution.vue'))
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
