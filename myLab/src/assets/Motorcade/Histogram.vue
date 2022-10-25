<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { ECharts, EChartsOption, init } from 'echarts'

let chart: ECharts;
const chartRef: Ref<HTMLElement | null> = ref(null)

const initChart = () => {
  const option: EChartsOption = {
//     title: {
//     text: 'World Population'
//   },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
  },
  series: [
    {
    //   name: '2011',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    },
    {
    //   name: '2012',
      type: 'bar',
      data: [19325, 23438, 31000, 121594, 134141, 681807]
    }
  ]
  };
  chart.setOption(option);
}
// const updateChart = () => {
//   const option: EChartsOption = {
//     xAxis: {
//       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//     },
//     series: [
//       {
//         data: [150, 230, 224, 218, 135, 147, 260]
//       }
//     ]
//   };
//   chart.setOption(option);
// }

onMounted(() => {
  chart = init(chartRef.value as HTMLElement)
  initChart()
  // 延时2秒后执行增量更新
//   setTimeout(() => {
//     updateChart()
//   }, 2000)
})
</script>

<template>
  <div class="chart" ref="chartRef"></div>
</template>

<style scoped>
.chart {
  width: 100%;
  height: 400px;
}
</style>
