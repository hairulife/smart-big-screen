<template>
  <div class="module">
    <div class="top">
      <ElSelect v-model="type" style="width: 120px" placeholder="请选择">
        <ElOption
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </ElSelect>
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
const type = ref()
const options = []
const dates = ref([new Date(), new Date()])
const option = ref({
  ...chartAdapter.generateLineOption({
    legend: chartAdapter.generateLegend({
      show: false
    }),
    grid: chartAdapter.generateGrid({
      top: 60
    }),
    series: [
      {
        ...chartAdapter.generateLineSeries({
          smooth: false
        }),
        color: 'rgba(98, 153, 255, .9)',
        barMaxWidth: chartAdapter.getSize(15)
      }
    ]
  }),
  dataset: {
    source: [
      {
        时间: '1.10',
        值: 0
      },
      {
        时间: '1.11',
        值: 0
      },
      {
        时间: '1.12',
        值: 0
      },
      {
        时间: '1.13',
        值: 0
      },
      {
        时间: '1.14',
        值: 0
      },
      {
        时间: '1.15',
        值: 0
      },
      {
        时间: '1.16',
        值: 0
      },
      {
        时间: '1.17',
        值: 0
      },
      {
        时间: '1.18',
        值: 0
      },
      {
        时间: '1.19',
        值: 0
      },
      {
        时间: '1.20',
        值: 0
      },
      {
        时间: '1.21',
        值: 0
      },
      {
        时间: '1.22',
        值: 0
      },
      {
        时间: '1.23',
        值: 0
      },
      {
        时间: '1.24',
        值: 0
      },
      {
        时间: '1.25',
        值: 0
      },
      {
        时间: '1.26',
        值: 0
      },
      {
        时间: '1.27',
        值: 0
      },
      {
        时间: '1.28',
        值: 0
      },
      {
        时间: '1.29',
        值: 0
      },
      {
        时间: '1.30',
        值: 0
      },
      {
        时间: '1.31',
        值: 0
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
    display: flex;
    gap: 10px;
    z-index: 1000;
    position: relative;
  }
  .chart {
    height: calc(100% - 36px);
  }
}
</style>
