<template>
  <div class="cockpit-home">
    <CardComp
      v-for="card in cards"
      :key="card.title"
      :title="card.title"
      :style="card.style"
      :class="card.class"
      v-show="!card.isClose"
    >
      <component :is="card.component" />
    </CardComp>
  </div>
</template>

<script setup>
import CardComp from '@/views/cockpit/components/CardComp.vue'
import { computed, defineAsyncComponent } from 'vue'
import { useCenterStore } from '@/stores/cockpit.js'
const centerStore = useCenterStore()
const cards = computed(() => {
  return [
    {
      isClose: centerStore.leftClose,
      title: '车辆管理',
      component: defineAsyncComponent(() => import('./modules/VehicleManagement.vue')),
      style: {
        gridRow: '1 / 2',
        gridColumn: '1 / 2'
      }
    },
    {
      title: '',
      style: {
        gridRow: '1 / 4',
        gridColumn:
          !centerStore.leftClose && !centerStore.rightClose
            ? '2 / 3'
            : centerStore.leftClose && !centerStore.rightClose
              ? '1 / 3'
              : !centerStore.leftClose && centerStore.rightClose
                ? '2 / 4'
                : '1 / 4',
        '--z-index-bg': -1
      },
      class: 'fullscreen',
      component: defineAsyncComponent(() => import('../home/modules/Center.vue'))
    },
    {
      isClose: centerStore.rightClose,
      title: '车辆测速',
      style: {
        gridRow: '1 / 3',
        gridColumn: '3 / 4',
        '--z-index-bg': -1
      },
      component: defineAsyncComponent(() => import('../home/modules/VehicleSpeed.vue'))
    },
    {
      isClose: centerStore.leftClose,
      title: '各单位违章车辆占比',
      component: defineAsyncComponent(() => import('./modules/ViolationRatio.vue')),
      style: {
        gridRow: '2 / 3',
        gridColumn: '1 / 2'
      }
    },
    {
      isClose: centerStore.leftClose,
      title: '超速占比',
      component: defineAsyncComponent(() => import('./modules/SpeedingRatio.vue')),
      style: {
        gridRow: '3 / 4',
        gridColumn: '1 / 2'
      }
    },
    {
      isClose: centerStore.rightClose,
      title: '按门岗统计',
      component: defineAsyncComponent(() => import('./modules/GateStatistics.vue')),
      style: {
        gridRow: '3 / 4',
        gridColumn: '3 / 4'
      }
    }
  ]
})
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
