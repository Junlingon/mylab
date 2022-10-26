<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { ECharts, EChartsOption, init } from 'echarts'

let chart: ECharts;
const chartRef: Ref<HTMLElement | null> = ref(null)
const symbolSize = 20;
const data = [
  [40, -10],
  [-30, -5],
  [-76.5, 20],
  [-63.5, 40],
  [-22.1, 50]
];
const initChart = () => {
  const option: EChartsOption = {
  title: {
    text: 'Try Dragging these Points',
    left: 'center'
  },
  tooltip: {
    triggerOn: 'none',
    formatter: function (params: any) {
      return (
        'X: ' +
        params.data[0].toFixed(2) +
        '<br>Y: ' +
        params.data[1].toFixed(2)
      );
    }
  },
  grid: {
    top: '8%',
    bottom: '12%'
  },
  xAxis: {
    min: -100,
    max: 70,
    type: 'value',
    axisLine: { onZero: false }
  },
  yAxis: {
    min: -30,
    max: 60,
    type: 'value',
    axisLine: { onZero: false }
  },
  dataZoom: [
    {
      type: 'slider',
      xAxisIndex: 0,
      filterMode: 'none'
    },
    {
      type: 'slider',
      yAxisIndex: 0,
      filterMode: 'none'
    },
    {
      type: 'inside',
      xAxisIndex: 0,
      filterMode: 'none'
    },
    {
      type: 'inside',
      yAxisIndex: 0,
      filterMode: 'none'
    }
  ],
  series: [
    {
      id: 'a',
      type: 'line',
      smooth: true,
      symbolSize: symbolSize,
      data: data
    }
  ]
};
  chart.setOption(option);
}
setTimeout(function () {
  // Add shadow circles (which is not visible) to enable drag.
  chart.setOption({
    graphic: data.map(function (item, dataIndex) {
      return {
        type: 'circle',
        position: chart.convertToPixel('grid', item),
        shape: {
          cx: 0,
          cy: 0,
          r: symbolSize / 2
        },
        invisible: true,
        draggable: true,
        ondrag: function (dx: number, dy: number) {
          onPointDragging(dataIndex, [(this as any).x, (this as any).y]);
        },
        onmousemove: function () {
          showTooltip(dataIndex);
        },
        onmouseout: function () {
          hideTooltip(dataIndex);
        },
        z: 100
      };
    })
  });
}, 0);



function showTooltip(dataIndex: number) {
    chart.dispatchAction({
    type: 'showTip',
    seriesIndex: 0,
    dataIndex: dataIndex
  });
}

function hideTooltip(dataIndex: number) {
    chart.dispatchAction({
    type: 'hideTip'
  });
}

function onPointDragging(dataIndex: number, pos: number[]) {
  data[dataIndex] = chart.convertFromPixel('grid', pos);

  // Update data
  chart.setOption({
    series: [
      {
        id: 'a',
        data: data
      }
    ]
  });
}

onMounted(() => {
  chart = init(chartRef.value as HTMLElement)
  initChart()
  window.addEventListener('resize', updatePosition);

    chart.on('dataZoom', updatePosition);
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
  height: 566px;
}

</style>
