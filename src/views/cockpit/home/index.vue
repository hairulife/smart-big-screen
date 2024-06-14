<template>
  <div class="cockpit-home">
    <CardComp
      v-for="card in cards"
      :key="card.title"
      :title="card.title"
      :style="card.style"
      v-show="!card.isClose"
    >
      <component :is="card.component" />
    </CardComp>
  </div>
</template>

<script setup>
import CardComp from '@/views/cockpit/components/CardComp.vue'
import { defineAsyncComponent, ref, watch, markRaw } from 'vue'
import { useCenterStore } from '@/stores/cockpit.js'
const centerStore = useCenterStore()
const cards = ref([
  {
    isClose: false,
    title: '人员定位',
    component: markRaw(defineAsyncComponent(() => import('./modules/RegionalPositioning.vue')))
  },
  {
    title: '',
    component: markRaw(defineAsyncComponent(() => import('./modules/Center.vue'))),
    style: {
      gridRow: '1 / 4',
      gridColumn: '2 / 3',
      '--z-index-bg': -1
    }
  },
  {
    isClose: false,
    title: '今日隐患违章情况',
    component: markRaw(defineAsyncComponent(() => import('./modules/HiddenDangersViolations.vue')))
  },
  {
    isClose: false,
    title: '车辆测速',
    component: markRaw(defineAsyncComponent(() => import('./modules/VehicleSpeed.vue')))
  },
  // {
  //   title: '不符合项分布情况',
  //   component: defineAsyncComponent(() => import('./modules/NonConformity.vue'))
  // },
  {
    isClose: false,
    title: '项目建筑效果图',
    component: markRaw(defineAsyncComponent(() => import('./modules/ArchitecturalRenderings.vue')))
  },
  {
    isClose: false,
    title: '智能电表当日用电统计',
    component: markRaw(defineAsyncComponent(() => import('./modules/SmartMeter.vue')))
  },
  {
    isClose: false,
    title: 'AI 告警列表',
    component: markRaw(defineAsyncComponent(() => import('./modules/AiAlerts.vue')))
  }
])

watch(
  () => centerStore.leftClose,
  (val) => {
    cards.value[0].isClose = val
    cards.value[3].isClose = val
    cards.value[5].isClose = val

    cards.value[1].style.gridColumn =
      !centerStore.leftClose && !centerStore.rightClose
        ? '2 / 3'
        : centerStore.leftClose && !centerStore.rightClose
          ? '1 / 3'
          : !centerStore.leftClose && centerStore.rightClose
            ? '2 / 4'
            : '1 / 4'
  },
  {
    immediate: true
  }
)

watch(
  () => centerStore.rightClose,
  (val) => {
    cards.value[2].isClose = val
    cards.value[4].isClose = val
    cards.value[6].isClose = val

    cards.value[1].style.gridColumn =
      !centerStore.leftClose && !centerStore.rightClose
        ? '2 / 3'
        : centerStore.leftClose && !centerStore.rightClose
          ? '1 / 3'
          : !centerStore.leftClose && centerStore.rightClose
            ? '2 / 4'
            : '1 / 4'
  },
  {
    immediate: true
  }
)
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
