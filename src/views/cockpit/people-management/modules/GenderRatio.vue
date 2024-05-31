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
      radius: ['60%', '80%'],
      color: ['#00ffff', '#c424ff']
    })
  }),
  legend: {
    show: false
  },
  dataset: {
    source: [
      ['product', 'sales'],
      ['男', 50],
      ['女', 50]
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
