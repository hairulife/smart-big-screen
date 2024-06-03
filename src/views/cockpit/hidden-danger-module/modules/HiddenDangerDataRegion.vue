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
  ...chartAdapter.generateBarOption({
    legend: chartAdapter.generateLegend({}),
    grid: chartAdapter.generateGrid({
      top: 60
    }),
    series: [
      {
        ...chartAdapter.generateBarSeries({
          smooth: false
        }),
        color: 'rgba(98, 153, 255, .9)',
        barMaxWidth: chartAdapter.getSize(15)
      },
      {
        ...chartAdapter.generateBarSeries({
          smooth: false
        }),
        color: 'rgba(0, 239, 171, .9)',
        barMaxWidth: chartAdapter.getSize(15)
      },
      {
        ...chartAdapter.generateBarSeries({
          smooth: false
        }),
        color: 'rgba(184, 215, 6, .9)',
        barMaxWidth: chartAdapter.getSize(15)
      },
      {
        ...chartAdapter.generateBarSeries({
          smooth: false
        }),
        color: 'rgba(255, 176, 38, .9)',
        barMaxWidth: chartAdapter.getSize(15)
      }
    ]
  }),
  dataset: {
    source: [
      {
        地点: '区域1',
        类型一: 2,
        类型二: 2,
        类型三: 2,
        类型四: 2
      },
      {
        地点: '区域2',
        类型一: 3,
        类型二: 3,
        类型三: 3,
        类型四: 3
      },
      {
        地点: '区域3',
        类型一: 4,
        类型二: 4,
        类型三: 4,
        类型四: 4
      },
      {
        地点: '区域4',
        类型一: 5,
        类型二: 5,
        类型三: 5,
        类型四: 5
      },
      {
        地点: '区域5',
        类型一: 6,
        类型二: 6,
        类型三: 6,
        类型四: 6
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
    display: flex;
    align-items: center;
  }
  .chart {
    height: calc(100% - 36px);
  }
}
</style>
