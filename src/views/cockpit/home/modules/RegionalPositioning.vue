<template>
  <div class="module">
    <div class="user">
      <div class="item" v-for="item in userCount" :key="item.count">
        <div class="num">
          {{ item.num }}
          <span class="unit">人</span>
        </div>
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
    <div class="chart">
      <ChartComp mark="RegionalPositioning" :option="option" />
    </div>
  </div>
</template>

<script setup>
import ChartComp from '@/views/cockpit/components/ChartComp.vue'
import chartAdapter from '@/views/cockpit/utils/chartAdapter.js'
import { ref } from 'vue'
import * as echarts from 'echarts'
const userCount = [
  {
    num: 122,
    name: '当前在场人数'
  },
  {
    num: 152,
    name: '今日累计人数'
  }
]
const option = ref({
  ...chartAdapter.generateBarOption({
    series: [
      {
        ...chartAdapter.generateBarSeries(),
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(98, 153, 255, .8)' },
          { offset: 1, color: 'rgba(98, 153, 255, .1)' }
        ]),
        barMaxWidth: chartAdapter.getSize(16),
        barWidth: chartAdapter.getSize(16)
      },
      {
        ...chartAdapter.generateBarSeries(),
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(247, 221, 116, .8)' },
          { offset: 1, color: 'rgba(247, 221, 116, .1)' }
        ]),
        barMaxWidth: chartAdapter.getSize(16),
        barWidth: chartAdapter.getSize(16)
      },
      {
        name: '',
        type: 'pictorialBar',
        symbolSize: [chartAdapter.getSize(16), chartAdapter.getSize(8)],
        color: 'rgba(98, 153, 255, 1)',
        symbolOffset: [-12, -4],
        tooltip: {
          show: false
        },
        symbolPosition: 'end',
        z: 13
      },
      {
        //三个最低下的圆片
        name: '',
        type: 'pictorialBar',
        symbolSize: [chartAdapter.getSize(16), chartAdapter.getSize(8)],
        symbolOffset: [12, -4],
        color: 'rgba(247, 221, 116, 1)',
        z: 13,
        symbolPosition: 'end',
        tooltip: {
          show: false
        }
      }
    ],
    legend: chartAdapter.generateLegend({
      data: ['累计', '实时'],
      selectedMode: false
    })
  }),
  dataset: {
    dimensions: ['单位', '累计', '实时', 'val1', 'val2'],
    source: [
      {
        单位: '单位1',
        累计: 33,
        实时: 23,
        val1: 33,
        val2: 23
      },
      {
        单位: '单位2',
        累计: 33,
        实时: 23,
        val1: 33,
        val2: 23
      },
      {
        单位: '单位3',
        累计: 33,
        实时: 23,
        val1: 33,
        val2: 23
      },
      {
        单位: '单位4',
        累计: 33,
        实时: 23,
        val1: 33,
        val2: 23
      },
      {
        单位: '单位5',
        累计: 33,
        实时: 23,
        val1: 33,
        val2: 23
      }
    ]
  }
})
</script>

<style lang="scss" scoped>
.module {
  height: 100%;
  padding: 10px;
  .user {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    .item {
      width: 100%;
      height: 60px;
      .num {
        font-size: 18px;
        color: #fff;
        background-color: #232e7d;
        height: 35px;
        line-height: 35px;
        text-align: center;

        .unit {
          font-size: 12px;
        }
      }
      .name {
        height: 25px;
        line-height: 25px;
        font-size: 16px;
        color: #fff;
        background-color: #2e80c0;
        text-align: center;
      }
    }
  }
  .chart {
    height: calc(100% - 60px);
  }
}
</style>
