<template>
  <div class="module">
    <div class="top">
      <ElDatePicker
        v-model="dates"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      />
    </div>
    <div class="chart">
      <ChartComp mark="NonConformity" :option="option" />
    </div>
  </div>
</template>

<script setup>
import ChartComp from '@/views/cockpit/components/ChartComp.vue'
import chartAdapter from '@/views/cockpit/utils/chartAdapter.js'
import { ref } from 'vue'
const dates = ref([new Date(), new Date()])
const option = ref({
  ...chartAdapter.generatePieOption({
    series: chartAdapter.generatePieSeries({
      radius: ['40%', '55%'],
      label: {
        show: false
      }
    })
  }),
  legend: chartAdapter.generateLegend({
    orient: 'vertical',
    top: 'auto',
    bottom: chartAdapter.getPercentage(10)
  }),
  title: {
    text: '398',
    subtext: '总数',
    left: 'center',
    top: chartAdapter.getPercentage(44),
    textStyle: {
      color: '#02fdff',
      fontSize: 30
    },
    subtextStyle: {
      fontSize: 20,
      lineHeight: 1,
      color: '#fff'
    }
  },
  dataset: {
    source: [
      ['product', 'sales'],
      ['一号核岛', 61.1],
      ['一号常规岛', 30.4],
      ['二号核岛', 24.4],
      ['二号常规岛', 14.1]
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
    display: flex;
    align-items: center;
  }
  .chart {
    height: calc(100% - 36px);
  }
}
</style>
