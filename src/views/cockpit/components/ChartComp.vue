<template>
  <div class="data-dashboard-chart" ref="chartRef"></div>
</template>

<script setup>
import { ref, watch, nextTick, getCurrentInstance, markRaw } from 'vue'
import * as echarts from 'echarts'
// import 'echarts-gl'
import chartAdapter from '../utils/chartAdapter.js'
import chartPool from '../utils/chartPool.js'
const chartRef = ref(null)

const chart = ref(null)
const props = defineProps({
  mark: {
    type: String
  },
  option: {
    type: Object
  }
})

const { attrs } = getCurrentInstance()

// 监听 option 变化
watch(
  () => props.option,
  (val) => {
    if (!chart.value) {
      nextTick(() => {
        init()
        chart.value.setOption(Object.assign(chartAdapter.generateInitOption(), val))
      })
    } else {
      chart.value.setOption(Object.assign(chartAdapter.generateInitOption(), val))
    }
  },
  { deep: true, immediate: true }
)

// 初始化图表
const init = () => {
  chart.value = markRaw(
    echarts.init(chartRef.value, 'dark', {
      renderer: 'svg'
    })
  )

  initEvent()

  // 注册实例池
  chartPool.alloc(props.mark, chart.value)
}

// 初始化事件
const initEvent = () => {
  if ('click' in attrs) {
    chart.value.on('click', attrs.click)
  }
}
</script>

<style lang="scss" scoped>
.data-dashboard-chart {
  width: 100%;
  height: 100%;
}
</style>
