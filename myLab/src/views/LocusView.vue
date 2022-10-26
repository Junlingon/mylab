<template>
    <ProductHeader></ProductHeader>
    <LeftMenu></LeftMenu>
    <div style="margin-left: 200px;background-color: #f0f0f0;height: 100vh;">
        <header>
      <h1>模拟智能车轨迹</h1>
      <div class="showTime">当前时间：2022年1月<span></span></div>
    </header>
    <div class="charts">
            <LocusChartVue></LocusChartVue>
        </div>
    </div>
</template>

<script lang="ts" setup>
import LeftMenu from "@/components/Product/LeftMenu.vue"
import ProductHeader from "@/components/Product/ProductHeader.vue"
import LocusChartVue from "@/components/Product/Locus/LocusChart.vue";
</script>


<style scoped> 
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

@font-face {
  font-family: electronicFont;
  src: url(@/components/Product/Motorcade/font/DS-DIGIT.TTF);
}

body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-color: #06164A;
  background-size: cover;
  /* 行高是字体1.15倍 */
  line-height: 1.15;
}

header {
  /* position: relative; */
  height: 2.25rem;
  background: url(@/components/Product/Motorcade/imgs/head_bg.png) no-repeat top center;
  background-size: 100% 100%;
}

header h1 {
  font-size: 1.475rem;
  color: #fff;
  text-align: center;
  /* line-height: 1rem; */
}

header .showTime {
  position: absolute;
  top: 0;
  right: 0.375rem;
  line-height: 0.9375rem;
  font-size: 0.25rem;
  color: rgba(255, 255, 255, 0.7);
}
.charts{
    height: 566px
}
</style>