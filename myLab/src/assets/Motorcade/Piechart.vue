<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { ECharts, EChartsOption, init } from 'echarts'

let chart: ECharts;
const chartRef: Ref<HTMLElement | null> = ref(null)

const initChart = () => {
  const option: EChartsOption = {
    legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
        { value: 26, name: 'rose 6' },
        { value: 22, name: 'rose 7' },
        { value: 18, name: 'rose 8' }
      ]
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
