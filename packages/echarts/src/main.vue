<template>
  <div :id="chartId" class="dl-echarts" :style="{width,height}"></div>
</template>

<script>
import echarts from 'echarts'
import * as macarons from './macarons.project.json'

export default {
  name: 'DlEcharts',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    theme: {
      type: Object,
      default () {
        return macarons.theme
      }
    },
    option: {
      type: Object,
      default () {
        return {
          title: { text: '默认的图表' },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
            }
          ]
        }
      }
    }
  },
  watch: {
    option: {
      deep: true,
      handler (v) {
        this.setOption(v)
      }
    }
  },
  data () {
    return {
      myChart: null,
      chartId: `id-${Math.random()}`
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      this.myChart = echarts.init(
        document.getElementById(this.chartId),
        this.theme
      )
      this.setOption(this.option)
    },
    setOption (option) {
      this.myChart.setOption(option)
    }
  }
}
</script>
