<template>
  <div class="regional-positioning">
    <div class="top">用电量：90.5KW/h</div>
    <div class="chart">
      <ChartComp mark="RegionalPositioning" :option="option" />
    </div>
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
    dimensions: ['单位', '累计', '实时'],
    source: [
      {
        单位: '单位1',
        累计: 33,
        实时: 23
      },
      {
        单位: '单位2',
        累计: 33,
        实时: 23
      },
      {
        单位: '单位3',
        累计: 33,
        实时: 23
      },
      {
        单位: '单位4',
        累计: 33,
        实时: 23
      }
    ]
  }
})
</script>

<style lang="scss" scoped>
.regional-positioning {
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  .top {
    height: 36px;
    line-height: 36px;
    font-size: 18px;
    color: #4feefc;
  }
  .chart {
    height: calc(100% - 36px);
  }
}
</style>
