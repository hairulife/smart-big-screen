<template>
  <div class="module">
    <ChartComp mark="PersonType" :option="option" />
  </div>
</template>

<script setup>
import ChartComp from '@/views/cockpit/components/ChartComp.vue'
import chartAdapter from '@/views/cockpit/utils/chartAdapter.js'
import { ref } from 'vue'
const option = ref({
  ...chartAdapter.generateBarOption({
    legend: chartAdapter.generateLegend({
      top: 0,
      left: 'auto',
      right: 0
    }),
    grid: [
      chartAdapter.generateGrid({
        top: 30,
        left: 195,
        right: 30
      }),
      chartAdapter.generateGrid({
        top: 30,
        left: 30,
        right: 245
      })
    ],
    yAxis: [
      chartAdapter.generateXAxis(),
      chartAdapter.generateXAxis({ gridIndex: 1, axisLabel: { show: false } })
    ],
    xAxis: [
      chartAdapter.generateYAxis(),
      chartAdapter.generateYAxis({
        gridIndex: 1,
        axisLabel: {
          formatter: (value) => {
            return Math.abs(value)
          }
        }
      })
    ],
    series: [
      {
        ...chartAdapter.generateBarSeries(),
        color: '#0edbe0',
        barMaxWidth: chartAdapter.getSize(15),
        itemStyle: {
          borderRadius: [0, 0, 0, 0]
        },
        label: {
          show: true,
          position: 'left',
          formatter: ({ data }) => {
            return Math.abs(data['女'])
          }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
      },
      {
        ...chartAdapter.generateBarSeries(),
        color: '#d3c022',
        barMaxWidth: chartAdapter.getSize(15),
        itemStyle: {
          borderRadius: [0, 0, 0, 0]
        },
        label: {
          show: true,
          position: 'right',
          formatter: ({ data }) => {
            return Math.abs(data['女'])
          }
        }
      }
    ]
  }),
  dataset: [
    {
      dimensions: ['年龄范围', '男', '女'],
      source: [
        {
          年龄范围: '20-30',
          男: -33,
          女: 33
        },
        {
          年龄范围: '30-40',
          男: -33,
          女: 33
        },
        {
          年龄范围: '40-50',
          男: -33,
          女: 33
        },
        {
          年龄范围: '50-60',
          男: -33,
          女: 33
        },
        {
          年龄范围: '60-70',
          男: -33,
          女: 33
        }
      ]
    }
  ]
})
</script>

<style lang="scss" scoped>
.module {
  height: 100%;
  padding: 10px;
}
</style>
