export default {
  // 放大比例
  _size: 100,
  // 字体颜色
  _color: '#fff',
  // 字体
  _fontFamily: 'Noto Sans SC, sans-serif',
  // 获取大小
  getSize(val) {
    return (this._size * val) / 100
  },
  // 获取百分比
  getPercentage(val) {
    return (this._size * val) / 100 + '%'
  },
  // 分析轴
  generateXAxis({
    type = 'category',
    position = 'bottom',
    offset = '',
    axisTick = {
      show: false,
      lineStyle: {
        color: this._color
      }
    },
    axisLine = {
      lineStyle: {
        color: '#999',
        width: 1
      }
    },
    axisLabel = {
      fontFamily: this._fontFamily,
      fontSize: this.getSize(14),
      color: this._color,
      hideOverlap: true // 隐藏重叠
    },
    min = null,
    max = null,
    data = null
  } = {}) {
    return {
      type,
      position,
      offset,
      boundaryGap: true,
      axisLine,
      axisLabel,
      axisTick,
      min,
      max,
      data
    }
  },
  // 数据轴
  generateYAxis({ name = '', minInterval = 1 } = {}) {
    return {
      name,
      nameTextStyle: {
        fontFamily: this._fontFamily,
        fontSize: this.getSize(14),
        color: this._color
      },
      type: 'value',
      minInterval,
      axisLabel: {
        fontFamily: this._fontFamily,
        fontSize: this.getSize(14),
        interval: 0,
        color: this._color
      },
      // y 轴线
      axisLine: {
        show: false,
        lineStyle: {
          color: this._color,
          width: 1
        }
      },
      // 刻度
      axisTick: {
        show: false,
        lineStyle: {
          color: this._color
        }
      },
      splitLine: {
        show: true,
        // 虚线
        lineStyle: {
          type: 'dashed'
        }
      }
    }
  },
  // 图例
  generateLegend({
    show = true,
    orient = 'horizontal',
    selected = {},
    selectedMode = 'true',
    left = orient === 'horizontal' ? 'center' : 'auto',
    right = orient === 'horizontal' ? 'auto' : this.getSize(10),
    bottom = orient === 'horizontal' ? 'auto' : this.getSize(6),
    top = this.getSize(6),
    itemGap = this.getSize(10),
    textStyle = {
      color: this._color,
      fontSize: this.getSize(14),
      fontFamily: this._fontFamily,
      lineHeight: this.getSize(14)
    }
  } = {}) {
    return {
      show,
      type: 'scroll',
      orient,
      top,
      left,
      right,
      bottom,
      textStyle,
      itemGap,
      icon: 'rect',
      itemWidth: this.getSize(13),
      itemHeight: this.getSize(13),
      selected,
      selectedMode
    }
  },
  // 提示框
  generateTooltip({
    show = true,
    trigger = 'axis',
    axisPointer = { type: 'shadow' },
    formatter = null,
    valueFormatter = (value) => value
  } = {}) {
    return {
      show,
      trigger,
      axisPointer,
      textStyle: {
        fontFamily: this._fontFamily,
        fontSize: this.getSize(14),
        color: this._color,
        lineHeight: this.getSize(14)
      },
      backgroundColor: 'rgba(0,0,0,.8)',
      borderWidth: this.getSize(2),
      borderColor: 'rgba(107, 221, 250)',
      // 边框内部阴影
      extraCssText: 'box-shadow: inset 0 0 8px rgba(107, 221, 250)',
      // 边框圆角
      borderRadius: 0,
      formatter,
      valueFormatter
    }
  },
  // 间隔
  generateGrid({
    top = this.getSize(60),
    left = this.getSize(10),
    right = this.getSize(10),
    bottom = this.getSize(10),
    containLabel = true
  } = {}) {
    return {
      top,
      left,
      right,
      bottom,
      containLabel
    }
  },
  // 线图
  generateLineSeries({ smooth = true } = {}) {
    return {
      type: 'line',
      smooth,
      symbolSize: 6,
      symbol: 'circle',
      emphasis: {
        focus: 'self'
      },
      // endLabel: {
      //   show: true,
      //   formatter: '{a}',
      //   distance: 20,
      //   fontFamily: 'pingfang',
      //   fontSize: this.getSize(14),
      //   lineHeight: this.getSize(14),
      //   color: this._color
      // },
      label: {
        show: true,
        position: 'top',
        fontSize: this.getSize(14),
        lineHeight: this.getSize(14),
        fontFamily: this._fontFamily,
        color: this._color
        // textBorderColor: '#000',
        // textBorderWidth: 1,
      },
      labelLayout: {
        hideOverlap: true
      }
    }
  },
  // 柱图
  generateBarSeries({ labelPosition = 'top', barMaxWidth = this.getSize(10) } = {}) {
    return {
      type: 'bar',
      // emphasis: {
      //   focus: "self",
      // },
      barMaxWidth,
      barGap: '0.5',
      itemStyle: {
        borderRadius: [this.getSize(4), this.getSize(4), 0, 0]
      },
      label: {
        show: true,
        position: labelPosition,
        // rotate: 90,
        fontSize: this.getSize(14),
        lineHeight: this.getSize(14),
        fontFamily: this._fontFamily,
        color: this._color,
        textBorderColor: '#000',
        textBorderWidth: 2
      },
      labelLayout: {
        hideOverlap: true
      }
    }
  },
  // 饼图
  generatePieSeries({
    top = 0,
    left = 0,
    right = 0,
    bottom = 0,
    radius = this.getPercentage(50),
    roseType = false,
    label = {
      color: this._color,
      fontFamily: this._fontFamily,
      fontSize: this.getSize(14),
      formatter: '{d}% {@[1]}',
      overflow: 'break'
    }
  } = {}) {
    return {
      type: 'pie',
      top,
      left,
      right,
      bottom,
      radius,
      roseType,
      emphasis: {
        itemStyle: {
          shadowOffsetX: 0
        },
        focus: 'self'
      },
      itemStyle: {
        borderColor: '#110c29',
        borderWidth: this.getSize(3),
        borderRadius: this.getSize(4)
      },
      label,
      labelLine: {
        smooth: true
      },
      labelLayout: {
        draggable: true
      }
    }
  },
  // 环图
  generatePieDoughnutSeries({
    top = 0,
    left = 0,
    right = this.getPercentage(20),
    bottom = 0,
    radius = [this.getPercentage(45), this.getPercentage(60)],
    label = {
      show: true,
      position: 'center',
      color: this._color,
      fontFamily: this._fontFamily,
      fontSize: this.getSize(12)
    }
  } = {}) {
    return {
      type: 'pie',
      top,
      left,
      right,
      bottom,
      radius,
      emphasis: {
        label: {
          show: true,
          fontSize: this.getSize(14)
        },
        focus: 'self'
      },
      itemStyle: {
        borderColor: '#110c29',
        borderWidth: this.getSize(3),
        borderRadius: this.getSize(4)
      },
      label,
      labelLine: {
        show: true
      }
    }
  },
  // 进度环
  generateGaugeSeries({
    data = [],
    width = this.getSize(20),
    radius = this.getPercentage(60)
  } = {}) {
    return {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      center: ['50%', '50%'],
      radius,
      min: 0,
      max: 100,
      pointer: {
        show: false
      },
      progress: {
        show: true,
        width
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width
        }
      },
      splitLine: {
        show: false
      },
      data,
      detail: {
        valueAnimation: true,
        offsetCenter: [0, -this.getSize(15)],
        fontSize: this.getSize(20),
        lineHeight: this.getSize(20),
        formatter: '{value}%',
        color: 'inherit',
        fontFamily: this._fontFamily
      },
      title: {
        fontSize: this.getSize(14),
        lineHeight: this.getSize(14),
        offsetCenter: [0, this.getSize(15)],
        fontFamily: this._fontFamily,
        color: this._color
      }
    }
  },
  // 生成地图
  generateMapSeries({
    itemStyle = {
      areaColor: '#19afea',
      borderColor: '#13357b'
    },
    emphasis = {
      label: {
        show: true,
        color: '#fff',
        fontSize: this.getSize(14),
        fontFamily: this._fontFamily,
        // 阴影
        textShadowColor: '#000',
        textShadowBlur: 3
      },
      itemStyle: {
        areaColor: '#1d5abd',
        shadowColor: '#000',
        shadowBlur: 3
      }
    }
  } = {}) {
    return {
      type: 'map',
      map: 'china',
      label: {
        show: true,
        // 白色字体
        color: '#fff',
        fontSize: this.getSize(10),
        fontFamily: this._fontFamily,
        // 阴影
        textShadowColor: '#000',
        textShadowBlur: 3
      },
      // 缩放比例
      zoom: 1.1,
      // 设置背景
      itemStyle,
      // 鼠标移入样式
      emphasis,
      // 选中样式
      select: false
      // {
      //   label: {
      //     show: true,
      //     color: "#fff",
      //     fontSize: this.getSize(14),
      //   },
      //   itemStyle: {
      //     areaColor: "#19afea",
      //     shadowColor: "#333",
      //     shadowBlur: 10,
      //   },
      // },
      // 滚轮可以放大
      // roam: true,
    }
  },
  generateVisualMap({ max = 100 } = {}) {
    return {
      min: 0,
      max: max == 0 ? 100 : max,
      text: ['多', '少'],
      realtime: false, // 拖拽时，是否实时更新
      calculable: false, // 是否显示拖拽用的手柄
      left: this.getSize(60),
      bottom: this.getSize(15),
      itemWidth: this.getSize(15),
      itemHeight: this.getSize(80),
      inRange: {
        color: ['#19afea', '#1d5abd']
      },
      textStyle: {
        color: this._color,
        fontSize: this.getSize(14)
      }
    }
  },
  generateDataZoom({ start = 50, end = 100 } = {}) {
    return {
      type: 'slider',
      start,
      end,
      bottom: 7,
      xAxisIndex: [0],
      showDataShadow: false, // 不显示数据走势
      height: this.getSize(15)
    }
  },
  // 工具栏
  generateToolbox(feature = {}) {
    return {
      show: true,
      showTitle: false,
      orient: 'vertical',
      itemSize: this.getSize(12),
      top: 'center',
      right: this.getSize(8),
      feature: {
        ...feature,
        saveAsImage: {
          backgroundColor: '#01040c'
        }
      },
      iconStyle: {
        borderWidth: this.getSize(1.5)
      },
      tooltip: {
        show: true,
        formatter: function (param) {
          return '<div>' + param.title + '</div>' // 自定义的 DOM 结构
        },
        trigger: 'none',
        textStyle: {
          fontSize: 12
        }
      }
    }
  },
  // 自定义工具栏
  generateCustomTool({ icon, title, onclick }) {
    return {
      show: true,
      title,
      icon,
      onclick
    }
  },
  // 初始化配置，图表组件初始化使用
  generateInitOption() {
    return {
      textStyle: {
        color: this._color,
        width: 200,
        fontStyle: 'normal',
        fontWeight: 'lighter',
        fontFamily: this._fontFamily,
        fontSize: this.getSize(14),
        lineHeight: this.getSize(14),
        overflow: 'truncate'
      },
      backgroundColor: 'rgba(0,0,0,0)'
      // toolbox: this.generateToolbox(),
    }
  },
  // 线图
  generateLineOption({
    xAxis = this.generateXAxis(),
    yAxis = this.generateYAxis(),
    legend = this.generateLegend(),
    tooltip = this.generateTooltip(),
    grid = this.generateGrid(),
    series = this.generateLineSeries()
  } = {}) {
    return { xAxis, yAxis, legend, tooltip, grid, series }
  },
  // 柱图
  generateBarOption({
    xAxis = this.generateXAxis(),
    yAxis = this.generateYAxis(),
    legend = this.generateLegend(),
    tooltip = this.generateTooltip(),
    grid = this.generateGrid(),
    series = this.generateBarSeries()
  } = {}) {
    return { xAxis, yAxis, legend, tooltip, grid, series }
  },
  // 饼图
  generatePieOption({
    legend = this.generateLegend({ orient: 'vertical' }),
    tooltip = this.generateTooltip(),
    series = this.generatePieSeries({
      right: this.getPercentage(20)
    })
  } = {}) {
    return { legend, tooltip, series }
  },
  // 环形饼图
  generatePieDoughnutOption({
    legend = this.generateLegend({ orient: 'vertical' }),
    tooltip = this.generateTooltip(),
    series = this.generatePieDoughnutSeries()
  } = {}) {
    return { legend, tooltip, series }
  },
  // 环图
  generateGaugeOption({
    data,
    tooltip = this.generateTooltip({ valueFormatter: (value) => value + '%' }),
    series = this.generateGaugeSeries({ data })
  } = {}) {
    return { tooltip, series }
  },
  // 地图
  generateMapOption({
    visualMap = this.generateVisualMap(),
    series = this.generateMapSeries(),
    geo = [
      {
        ...this.generateMapSeries({
          itemStyle: {
            shadowColor: '#275383',
            shadowOffsetX: 0,
            shadowOffsetY: 20,
            shadowBlur: 2
          },
          emphasis: {}
        }),
        tooltip: {
          show: false
        }
      },
      {
        ...this.generateMapSeries({
          itemStyle: {
            shadowColor: '#35a4ed',
            shadowOffsetX: 0,
            shadowOffsetY: 10,
            shadowBlur: 2
          },
          emphasis: {}
        }),
        tooltip: {
          show: false
        }
      },
      {
        ...this.generateMapSeries({
          itemStyle: {
            borderColor: '#64def6',
            borderWidth: 4
          },
          emphasis: {}
        }),
        tooltip: {
          show: false
        }
      }
    ],
    tooltip = this.generateTooltip({
      trigger: 'item'
    })
  } = {}) {
    return {
      visualMap,
      series,
      geo,
      tooltip
    }
  }
}
