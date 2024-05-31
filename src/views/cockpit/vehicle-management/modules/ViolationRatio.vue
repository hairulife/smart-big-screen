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
    legend: { show: false },
    series: chartAdapter.generatePieSeries({
      radius: ['50%', '70%']
    })
  }),
  title: {
    text: '398',
    subtext: '总数',
    left: 'center',
    top: 92,
    textStyle: {
      fontSize: 24,
      color: '#4feefc'
    },
    subtextStyle: {
      fontSize: 18,
      lineHeight: 1,
      color: '#fff'
    }
  },
  dataset: {
    source: [
      ['product', 'sales'],
      ['单位一', 61.1],
      ['单位二', 30.4],
      ['单位三', 24.4],
      ['单位四', 14.1]
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
