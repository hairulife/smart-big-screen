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
  ...chartAdapter.generateHillOption({
    legend: { show: false },
    grid: chartAdapter.generateGrid({
      top: 10
    }),
    series: chartAdapter.generateHillSeries({
      barMaxWidth: chartAdapter.getSize(30)
    })
  }),
  dataset: {
    source: [
      ['product', 'sales'],
      ['门禁', 3],
      ['报警器', 4],
      ['人脸识别', 3],
      ['车牌识别', 5],
      ['其他', 3]
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
