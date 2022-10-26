
  <script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { ECharts, EChartsOption, init } from 'echarts'

let chart: ECharts;
const chartRef: Ref<HTMLElement | null> = ref(null)

const initChart = () => {
  const option: EChartsOption = {
    grid: {
    top:"9%",
    left: '0%',
    right: '9%',
    bottom: '9%',
    containLabel: true
  },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      nameLocation: 'middle'
    },
    yAxis: {
      name: 'Income'
    },
    series: [
      {
        type: 'line',
        datasetId: 'dataset_since_1950_of_germany',
        showSymbol: false,
        encode: {
          x: 'Year',
          y: 'Income',
          itemName: 'Year',
          tooltip: ['Income']
        }
      },
      {
        type: 'line',
        datasetId: 'dataset_since_1950_of_france',
        showSymbol: false,
        encode: {
          x: 'Year',
          y: 'Income',
          itemName: 'Year',
          tooltip: ['Income']
        }
      }
    ]
  };
  
  chart.setOption(option);
}

const updateChart = () => {
  const option: EChartsOption = {
    grid: {
    top:"9%",
    left: '0%',
    right: '9%',
    bottom: '9%',
    containLabel: true
  },
    xAxis: {
      data: ['2018', '2019', '2020', '2021', '2022']
    },
    yAxis: {
      data: ['1', '2', '3']
    },
    series: [
      {
        data: [7884, 230, 224, 218, 135, 147, 260]
      },
      {
        data: [8301, 230, 224, 218, 135, 147, 260]
      }
    ]
  };
  chart.setOption(option);
}

onMounted(() => {
  chart = init(chartRef.value as HTMLElement)
  initChart()
  // 延时2秒后执行增量更新
  setTimeout(() => {
    updateChart()
  }, 2000)
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
