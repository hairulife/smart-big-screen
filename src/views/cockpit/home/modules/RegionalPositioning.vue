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
    num: 282,
    name: '当前在场人数'
  },
  {
    num: 339,
    name: '今日到场人数'
  }
]
const option = ref({
  ...chartAdapter.generateBarOption({
    series: [
      {
        ...chartAdapter.generateBarSeries(),
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: 'rgba(98, 153, 255, 1)' },
          { offset: 1, color: 'rgba(98, 153, 255, .2)' }
        ]),
        barMaxWidth: chartAdapter.getSize(16),
        barWidth: chartAdapter.getSize(16)
      },
      {
        ...chartAdapter.generateBarSeries(),
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: 'rgba(247, 221, 116, 1)' },
          { offset: 1, color: 'rgba(247, 221, 116, .2)' }
        ]),
        barMaxWidth: chartAdapter.getSize(16),
        barWidth: chartAdapter.getSize(16)
      },
      {
        name: '',
        type: 'pictorialBar',
        symbolSize: [chartAdapter.getSize(16), chartAdapter.getSize(8)],
        color: 'rgb(98, 153, 255)',
        symbolOffset: [-12, -4],
        tooltip: {
          show: false
        },
        symbolPosition: 'end',
        z: 10
      },
      {
        //三个最低下的圆片
        name: '',
        type: 'pictorialBar',
        symbolSize: [chartAdapter.getSize(16), chartAdapter.getSize(8)],
        symbolOffset: [12, -4],
        color: 'rgb(247, 221, 116)',
        z: 10,
        symbolPosition: 'end',
        tooltip: {
          show: false
        }
      },
      {
        name: '',
        type: 'pictorialBar',
        symbolSize: [chartAdapter.getSize(16), chartAdapter.getSize(8)],
        color: 'rgba(98, 153, 255, .8)',
        symbolOffset: [-12, 4],
        tooltip: {
          show: false
        },
        z: 0
      },
      {
        name: '',
        type: 'pictorialBar',
        symbolSize: [chartAdapter.getSize(16), chartAdapter.getSize(8)],
        symbolOffset: [12, 4],
        color: 'rgba(247, 221, 116, .8)',
        z: 0,
        tooltip: {
          show: false
        }
      }
    ],
    legend: chartAdapter.generateLegend({
      data: ['到场', '实时'],
      selectedMode: false
    })
  }),
  dataset: {
    dimensions: ['单位', '到场', '实时', 'val1', 'val2'],
    source: [
      {
        单位: '浙江火电',
        到场: 270,
        实时: 255,
        val1: 270,
        val2: 255,
        val3: 270,
        val4: 255
      },
      {
        单位: '中核大地',
        到场: 32,
        实时: 30,
        val1: 32,
        val2: 30,
        val3: 32,
        val4: 30
      },
      {
        单位: '龙源工程',
        到场: 22,
        实时: 15,
        val1: 22,
        val2: 15,
        val3: 22,
        val4: 15
      },
      {
        单位: '中安瑞力',
        到场: 8,
        实时: 5,
        val1: 8,
        val2: 5,
        val3: 8,
        val4: 5
      },
      {
        单位: '上海监理',
        到场: 7,
        实时: 7,
        val1: 7,
        val2: 7,
        val3: 7,
        val4: 7
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
    color: rgb(103, 91, 47);
  }
}
</style>
