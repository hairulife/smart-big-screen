<template>
  <div class="module">
    <ChartComp mark="NonConformity" :option="option" />
  </div>
</template>

<script setup>
import ChartComp from '@/views/cockpit/components/ChartComp.vue'
import chartAdapter from '@/views/cockpit/utils/chartAdapter.js'
import { ref } from 'vue'
const option = ref({
  title: [
    {
      text: '10%以内',
      textStyle: {
        fontSize: chartAdapter.getSize(18),
        color: '#fcd01a'
      },
      top: '5%',
      left: '12%'
    },
    {
      text: '10%~30%',
      textStyle: {
        fontSize: chartAdapter.getSize(18),
        color: '#f97413'
      },
      left: 'center'
    },
    {
      text: '30%以上',
      textStyle: {
        fontSize: chartAdapter.getSize(18),
        color: '#fd1a10'
      },
      top: '5%',
      right: '12%'
    }
  ],
  series: [
    chartAdapter.generateGaugeSeries({
      data: [{ value: 50, name: '120次' }],
      startAngle: 220,
      endAngle: 40,
      center: ['20%', '55%'],
      width: chartAdapter.getSize(10),
      axisLine: {
        lineStyle: {
          color: [
            [0, '#fbee76'],
            [1, '#fcd01a']
          ],
          width: chartAdapter.getSize(10)
        }
      },
      progress: {
        show: false
      },
      splitLine: {
        show: true,
        length: chartAdapter.getSize(10),
        lineStyle: {
          color: '#fcd01a',
          width: 1
        },
        distance: 3
      },
      pointer: {
        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
        length: '15%',
        width: 12,
        offsetCenter: [0, '-60%'],
        itemStyle: {
          color: '#fcd01a'
        }
      },
      title: {
        fontSize: chartAdapter.getSize(18),
        lineHeight: chartAdapter.getSize(18),
        offsetCenter: [0, chartAdapter.getSize(60)],
        color: '#000',
        backgroundColor: '#fcd834',
        fontWeight: 'bold',
        padding: [chartAdapter.getSize(5), chartAdapter.getSize(10)]
      },
      detail: {
        valueAnimation: true,
        offsetCenter: [0, 0],
        fontSize: chartAdapter.getSize(16),
        lineHeight: chartAdapter.getSize(16),
        formatter: '{value}km/h',
        color: 'inherit',
        fontFamily: chartAdapter._fontFamily
      }
    }),
    chartAdapter.generateGaugeSeries({
      data: [{ value: 50, name: '120次' }],
      startAngle: 220,
      endAngle: -40,
      center: ['50%', '45%'],
      width: chartAdapter.getSize(10),
      axisLine: {
        lineStyle: {
          color: [
            [0, '#de996e'],
            [1, '#f97413']
          ],
          width: chartAdapter.getSize(10)
        }
      },
      progress: {
        show: false
      },
      splitLine: {
        show: true,
        length: chartAdapter.getSize(10),
        lineStyle: {
          color: '#f97413',
          width: 1
        },
        distance: 3
      },
      pointer: {
        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
        length: '15%',
        width: 12,
        offsetCenter: [0, '-60%'],
        itemStyle: {
          color: '#f97413'
        }
      },
      title: {
        fontSize: chartAdapter.getSize(18),
        lineHeight: chartAdapter.getSize(18),
        offsetCenter: [0, chartAdapter.getSize(60)],
        color: '#000',
        backgroundColor: '#f97413',
        fontWeight: 'bold',
        padding: [chartAdapter.getSize(5), chartAdapter.getSize(10)]
      },
      detail: {
        valueAnimation: true,
        offsetCenter: [0, 0],
        fontSize: chartAdapter.getSize(16),
        lineHeight: chartAdapter.getSize(16),
        formatter: '{value}km/h',
        color: 'inherit',
        fontFamily: chartAdapter._fontFamily
      }
    }),
    chartAdapter.generateGaugeSeries({
      data: [{ value: 50, name: '120次' }],
      startAngle: 140,
      endAngle: 320,
      center: ['80%', '55%'],
      width: chartAdapter.getSize(10),
      axisLine: {
        lineStyle: {
          color: [
            [0, '#f6905d'],
            [1, '#fd1a10']
          ],
          width: chartAdapter.getSize(10)
        }
      },
      progress: {
        show: false
      },
      splitLine: {
        show: true,
        length: chartAdapter.getSize(10),
        lineStyle: {
          color: '#fd1a10',
          width: 1
        },
        distance: 3
      },
      pointer: {
        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
        length: '15%',
        width: 12,
        offsetCenter: [0, '-60%'],
        itemStyle: {
          color: '#fd1a10'
        }
      },
      title: {
        fontSize: chartAdapter.getSize(18),
        lineHeight: chartAdapter.getSize(18),
        offsetCenter: [0, chartAdapter.getSize(60)],
        color: '#000',
        backgroundColor: '#fd1a10',
        fontWeight: 'bold',
        padding: [chartAdapter.getSize(5), chartAdapter.getSize(10)]
      },
      detail: {
        valueAnimation: true,
        offsetCenter: [0, 0],
        fontSize: chartAdapter.getSize(16),
        lineHeight: chartAdapter.getSize(16),
        formatter: '{value}km/h',
        color: 'inherit'
      }
    })
  ]
})
</script>

<style lang="scss" scoped>
.module {
  height: 100%;
  padding: 10px;
}
</style>
