<template>
  <div class="module">
    <div class="top">
      <div
        class="item"
        :class="{ reverse: index % 2 === 1 }"
        v-for="(item, index) in userCount"
        :key="item.count"
      >
        <div class="num">
          {{ item.num }}
        </div>
        <div class="name">{{ item.name }}</div>
      </div>
      <div class="center-icon">
        <div class="safe-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
              <path
                d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
              />
              <path
                fill="currentColor"
                d="M11.298 2.195a2 2 0 0 1 1.232-.056l.172.056l7 2.625a2 2 0 0 1 1.291 1.707l.007.166v5.363a9 9 0 0 1-4.709 7.91l-.266.14l-3.354 1.676a1.5 1.5 0 0 1-1.198.063l-.144-.062l-3.354-1.678a9 9 0 0 1-4.97-7.75l-.005-.3V6.694a2 2 0 0 1 1.145-1.808l.153-.065zm-.155 5.957L9.152 11.47a1.01 1.01 0 0 0 .866 1.53h2.216l-1.091 1.819a1 1 0 0 0 1.714 1.029l1.991-3.318a1.01 1.01 0 0 0-.866-1.53h-2.216l1.092-1.819a1 1 0 0 0-1.716-1.029Z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div class="chart">
      <ChartComp mark="HiddenDangersViolations" :option="option" />
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
    name: '累计隐患总数'
  },
  {
    num: 152,
    name: '当日新增'
  },
  {
    num: 122,
    name: '当日关闭'
  },
  {
    num: 152,
    name: '超期未关闭数'
  }
]
const option = ref({
  ...chartAdapter.generateBarOption({
    legend: chartAdapter.generateLegend({
      selectedMode: 'single'
    }),
    series: [
      chartAdapter.generateBarSeries({
        barMaxWidth: chartAdapter.getSize(20)
      }),
      chartAdapter.generateBarSeries({
        barMaxWidth: chartAdapter.getSize(20)
      }),
      chartAdapter.generateBarSeries({
        barMaxWidth: chartAdapter.getSize(20)
      }),
      chartAdapter.generateBarSeries({
        barMaxWidth: chartAdapter.getSize(20)
      })
    ]
  }),
  dataset: {
    dimensions: ['x', '类型', '单位', '同比', '环比'],
    source: [
      {
        x: '环境的不符合项',
        类型: 320,
        单位: 120,
        同比: 20,
        环比: 10
      },
      {
        x: '设备的不符合项',
        类型: 220,
        单位: 100,
        同比: 10,
        环比: 5
      },
      {
        x: '人员的不符合项',
        类型: 150,
        单位: 80,
        同比: 5,
        环比: 3
      },
      {
        x: '管理的不符合项',
        类型: 100,
        单位: 50,
        同比: 3,
        环比: 2
      }
    ]
  }
})
</script>

<style lang="scss" scoped>
.module {
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  .top {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    position: relative;
    .item {
      width: calc(50% - 3px);
      height: 30px;
      line-height: 30px;
      display: flex;
      justify-content: space-between;
      padding: 0 40px 0 20px;
      background: linear-gradient(
        to right,
        rgba(77, 119, 197, 0.05),
        hsla(221, 77%, 51%, 0.7),
        hsla(221, 91%, 47%, 0.957)
      );

      &.reverse {
        flex-direction: row-reverse;
        padding: 0 20px 0 40px;
        background: linear-gradient(
          to left,
          rgba(77, 119, 197, 0.05),
          hsla(221, 77%, 51%, 0.7),
          hsla(221, 91%, 47%, 0.957)
        );
      }
    }

    .center-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #021d5f;
      height: 70px;
      width: 70px;
      border-radius: 50%;
      .safe-wrap {
        height: 60px;
        width: 60px;
        background-color: #0044bb;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        svg {
          width: 40px;
          height: 40px;
          color: #fdbd65;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  .chart {
    height: calc(100% - 60px);
  }
}
</style>
