<template>
  <div class="module">
    <div class="top">用电量：{{ 730 + 545 }}KW/h</div>
    <div class="chart">
      <ChartComp mark="SmartMeter" :option="option" />
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
        color: 'rgb(4, 254, 249)',
        barMaxWidth: chartAdapter.getSize(20)
      },
      {
        // 分隔
        type: 'pictorialBar',
        itemStyle: {
          normal: {
            color: 'rgb(8, 20, 63)'
          }
        },
        symbolRepeat: 'fixed',
        symbolMargin: 3,
        symbol: 'rect',
        symbolClip: true,
        symbolSize: [20, 2],
        symbolPosition: 'start',
        symbolOffset: [0, 3],
        width: 2,
        z: 0,
        zlevel: 1,
        tooltip: {
          show: false
        }
      }
    ]
  }),
  dataset: {
    dimensions: ['单位', '累计'],
    source: [
      {
        单位: '中建一局',
        累计: 730
      },
      {
        单位: '中安瑞力',
        累计: 545
      }
    ]
  }
})
</script>

<style lang="scss" scoped>
.module {
  height: 100%;
  padding: 10px;

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
