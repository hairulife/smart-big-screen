<template>
  <div class="module">
    <div class="top">
      <div
        class="item"
        :class="{ reverse: index % 2 === 1 }"
        v-for="(item, index) in userCount"
        :key="item.count"
      >
        <div class="icon"></div>
        <div class="content">
          <div class="num">
            {{ item.num }}
          </div>
          <div class="name">{{ item.name }}</div>
        </div>
      </div>
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
const userCount = [
  {
    num: 122,
    name: '关闭数量'
  },
  {
    num: 152,
    name: '关闭率'
  }
]
const option = ref({
  ...chartAdapter.generatePieOption({
    series: chartAdapter.generatePieSeries({
      right: chartAdapter.getPercentage(20),
      radius: ['60%', '90%'],
      label: {
        show: false
      },
      // 玫瑰图
      roseType: 'radius'
    })
  }),
  title: {
    text: '398',
    subtext: '总数',
    left: chartAdapter.getSize(170),
    top: chartAdapter.getSize(63),
    textAlign: 'center',
    textStyle: {
      fontSize: 20
    },
    subtextStyle: {
      fontSize: 16,
      lineHeight: 1,
      color: '#fff'
    }
  },
  dataset: {
    source: [
      ['product', 'sales'],
      ['一号区域', 61.1],
      ['二号区域', 30.4],
      ['三号区域', 24.4],
      ['四号区域', 14.1]
    ]
  }
})
</script>

<style lang="scss" scoped>
.module {
  height: 100%;
  padding: 10px;

  .top {
    height: 60px;
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
    .item {
      display: flex;
      align-items: center;
      gap: 20px;
      .icon {
        width: 60px;
        height: 60px;
        background: url('@/views/cockpit/images/home2.png') no-repeat;
        background-size: 100% 100%;
      }
      .num {
        color: #38edfd;
        font-size: 18px;
        line-height: 1;
        margin-bottom: 6px;
      }
      .name {
        font-size: 16px;
        line-height: 1;
      }
    }
  }
  .chart {
    height: calc(100% - 60px);
  }
}
</style>
