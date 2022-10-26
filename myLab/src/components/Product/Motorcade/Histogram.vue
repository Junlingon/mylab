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
    top:"9%",
    left: '0%',
    right: '9%',
    bottom: '9%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: [ 'd106', 'd108', 'd107', 'd102', 'd214']
  },
  series: [
    {
    //   name: '2011',
      type: 'bar',
      data: [ 2, 4, 4, 7, 6]
    },
    {
    //   name: '2012',
      type: 'bar',
      data: [ 3, 3, 5, 4, 7]
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
