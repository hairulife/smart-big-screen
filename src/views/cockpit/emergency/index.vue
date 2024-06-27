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
      title: '广播模式',
      component: defineAsyncComponent(() => import('./modules/BroadcastMode.vue')),
      style: {
        gridRow: '1 / 2',
        gridColumn: '1 / 2'
      }
    },
    {
      title: '',
      component: defineAsyncComponent(() => import('../home/modules/Center.vue')),
      class: 'fullscreen',
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
      }
    },
    {
      isClose: centerStore.rightClose,
      title: '广播数量统计',
      component: defineAsyncComponent(() => import('./modules/BroadcastStatistics.vue')),
      style: {
        gridRow: '1 / 2',
        gridColumn: '3 / 4'
      }
    },
    {
      isClose: centerStore.leftClose,
      title: '应急广播',
      component: defineAsyncComponent(() => import('./modules/EmergencyBroadcast.vue')),
      style: {
        gridRow: '2 / 3',
        gridColumn: '1 / 2'
      }
    },
    {
      isClose: centerStore.rightClose,
      title: '今日广播数量',
      component: defineAsyncComponent(() => import('./modules/TodayBroadcast.vue')),
      style: {
        gridRow: '2 / 3',
        gridColumn: '3 / 4'
      }
    },
    {
      isClose: centerStore.leftClose,
      title: '正常广播',
      component: defineAsyncComponent(() => import('./modules/NormalBroadcast.vue')),
      style: {
        gridRow: '3 / 4',
        gridColumn: '1 / 2'
      }
    },
    {
      isClose: centerStore.rightClose,
      title: '设备状态统计',
      component: defineAsyncComponent(() => import('./modules/DeviceStatus.vue')),
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
