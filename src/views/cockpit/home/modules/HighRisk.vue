<template>
  <div class="module">
    <div class="top">
      <ElRadioGroup v-model="type">
        <ElRadio v-for="item in typeList" :key="item.value" :value="item.value">{{
          item.label
        }}</ElRadio>
      </ElRadioGroup>
    </div>
    <div class="chart">
      <ChartComp mark="HighRisk" :option="option" />
    </div>
  </div>
</template>

<script setup>
import ChartComp from '@/views/cockpit/components/ChartComp.vue'
import chartAdapter from '@/views/cockpit/utils/chartAdapter.js'
import { ref } from 'vue'
import { ElRadioGroup, ElRadio } from 'element-plus'
const typeList = [
  {
    label: '类型',
    value: 0
  },
  {
    label: '区域',
    value: 1
  },
  {
    label: '单位',
    value: 2
  },
  {
    label: '时间',
    value: 3
  }
]
const type = ref(0)
const option = ref({
  ...chartAdapter.generatePieOption({
    series: chartAdapter.generatePieSeries({
      right: chartAdapter.getPercentage(20),
      radius: ['10%', '70%'],
      label: {
        show: false
      },
      // 玫瑰图
      roseType: 'radius'
    })
  }),
  dataset: {
    source: [
      ['product', 'sales'],
      ['射线探伤', 61.1],
      ['消防管道安装', 30.4],
      ['临边作业', 24.4],
      ['基坑开挖工程', 20.1]
    ]
  }
})
</script>

<style lang="scss" scoped>
.module {
  height: 100%;
  padding: 10px;
  .top {
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: center;
  }
  .chart {
    height: calc(100% - 60px);
  }
}
</style>
