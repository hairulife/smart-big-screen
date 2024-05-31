<template>
  <div class="module">
    <ChartComp mark="SmartMeter" :option="option" />
  </div>
</template>

<script setup>
import ChartComp from '@/views/cockpit/components/ChartComp.vue'
import chartAdapter from '@/views/cockpit/utils/chartAdapter.js'
import { ref } from 'vue'
const option = ref({
  ...chartAdapter.generateBarOption({
    legend: chartAdapter.generateLegend({
      show: false
    }),
    grid: chartAdapter.generateGrid({
      top: 20
    }),
    series: [
      {
        ...chartAdapter.generateBarSeries(),
        color: 'rgba(98, 153, 255, .9)',
        barMaxWidth: chartAdapter.getSize(15)
      }
    ]
  }),
  dataset: {
    source: [
      {
        单位: 'AI 告警',
        累计: 2
      },
      {
        单位: '人工广播',
        累计: 4
      },
      {
        单位: '应急广播',
        累计: 2
      },
      {
        单位: '文本广播',
        累计: 7
      },
      {
        单位: '音频广播',
        累计: 3
      }
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
