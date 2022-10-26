<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { ECharts, EChartsOption, init } from 'echarts'
import axios from 'axios';

let chart: ECharts;
const chartRef: Ref<HTMLElement | null> = ref(null)
var gridData=ref([])
var ROOT_PATH = 'path/examples';
var getData=async ()=>{
    await axios.get(ROOT_PATH + '/data/asset/data/flare.json').then((data:any)=>{
    console.log(data);
//     data.children.forEach(function ( datum: { collapsed: boolean }, index: number ) {
//     index % 2 === 0 && (datum.collapsed = true);
//   });
    gridData=data.data.children
    initChart(gridData)
})
}


const initChart = (data:any) => {
    console.log(data);
    
  const option: EChartsOption = {
    
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',

          data: data,

          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',

          symbolSize: 7,

          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 9
          },

          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          },

          emphasis: {
            focus: 'descendant'
          },

          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
        }
      ]
    };
  chart.setOption(option);
}


onMounted(() => {
  chart = init(chartRef.value as HTMLElement)
  getData()
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
