<template>
  <div class="cockpit-home">
    <CardComp title="设备列表" style="--z-index-bg: -1">
      <DeviceList />
    </CardComp>
    <CardComp style="--z-index-bg: -1">
      <DeviceStatus />
    </CardComp>
  </div>
</template>

<script setup>
import CardComp from '@/views/cockpit/components/CardComp.vue'
import DeviceList from './modules/DeviceList.vue'
import DeviceStatus from './modules/DeviceStatus.vue'
</script>

<style lang="scss" scoped>
.cockpit-home {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 10px;
}
</style>
