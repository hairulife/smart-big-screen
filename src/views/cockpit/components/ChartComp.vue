<template>
  <div class="data-dashboard-chart"></div>
</template>

<script>
import * as echarts from 'echarts'
import chartAdapter from '../utils/chartAdapter.js'
import chartPool from '../utils/chartPool.js'
export default {
  props: {
    mark: {
      type: String
    },
    option: {
      type: Object
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    option: {
      handler(val) {
        if (!this.chart) {
          this.$nextTick(() => {
            this.init()
            this.chart.setOption(Object.assign(chartAdapter.generateInitOption(), val))
          })
        } else {
          this.chart.setOption(Object.assign(chartAdapter.generateInitOption(), val))
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    init() {
      this.chart = echarts.init(this.$el, 'dark', {
        renderer: 'canvas'
      })

      // window.addEventListener("resize", () => {
      //   this.chart.resize();
      // });

      // this.initEvent()

      // 注册实例池
      chartPool.alloc(this.mark, this.chart)
    }
    // initEvent() {
    //   if ('click' in this.$listeners) {
    //     this.chart.on('click', this.$listeners.click)
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.data-dashboard-chart {
  width: 100%;
  height: 100%;
}
</style>
