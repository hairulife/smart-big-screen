<template>
  <div class="module">
    <div class="top">总数：{{ 68 + 29 + 15 + 248 + 22 }}人</div>
    <div class="chart">
      <ChartComp mark="PersonType" :option="option" />
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
        单位: '管理人员',
        累计: 68
      },
      {
        单位: '企业人员',
        累计: 29
      },
      {
        单位: '专职安全管理人员',
        累计: 15
      },
      {
        单位: '施工人员',
        累计: 248
      },
      {
        单位: '其他',
        累计: 22
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
