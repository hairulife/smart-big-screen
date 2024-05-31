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
      ['1#门岗', 61.1],
      ['2#门岗', 59.2],
      ['3#门岗', 53.3],
      ['4#门岗', 53.4]
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
