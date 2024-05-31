<template>
  <div class="module">
    <ChartComp mark="NonConformity" :option="option" />
  </div>
</template>

<script setup>
import ChartComp from '@/views/cockpit/components/ChartComp.vue'
import chartAdapter from '@/views/cockpit/utils/chartAdapter.js'
import { ref } from 'vue'
const option = ref({
  ...chartAdapter.generatePieOption({
    series: chartAdapter.generatePieSeries({
      color: ['#02fbfd', '#f59a23', '#ffff00'],
      right: chartAdapter.getPercentage(20),
      radius: ['0', '50%']
    })
  }),
  dataset: {
    source: [
      ['product', 'sales'],
      ['在线', 21],
      ['离线', 10],
      ['占用', 4]
    ]
  }
})
</script>

<style lang="scss" scoped>
.module {
  height: 100%;
  padding: 10px;
}
</style>
