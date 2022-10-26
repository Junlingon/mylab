<template>
  <ProductHeader></ProductHeader>
  <LeftMenu></LeftMenu>
  <div style="margin-left: 200px;background-color: #f0f0f0;height: 100vh;">
    <header>
      <h1>车队数据可视化</h1>
      <div class="showTime">当前时间：2022年1月<span></span></div>
    </header>
    <section class="mainbox">
      <div class="column">
        <div class="panel bar">
          <h2>
            柱状图-实验室车队数量 
          </h2>
          <HistogramVue></HistogramVue>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <h2>折线图-学习变化</h2>
          <Linechart></Linechart>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h2>饼形图-学生年龄分布</h2>
          <PiechartVue></PiechartVue>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>125811</li>
              <li>104563</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>车队人数</li>
              <li>智能车队数量</li>
            </ul>
          </div>
        </div>
        <div class="map">
          <div class="chart"></div>
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
        </div>
      </div>
      <div class="column">
        <div class="panel bar1">
          <h2>柱状图-获奖情况</h2>
          <HistogramVue2></HistogramVue2>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line1">
          <h2>折线图-车队人员流动</h2>
          <Linechart2></Linechart2>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie1">
          <h2>饼形图-各实验室车队占比</h2>
          <PiechartVue2></PiechartVue2>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import LeftMenu from "@/components/Product/LeftMenu.vue"
import ProductHeader from "@/components/Product/ProductHeader.vue"
import Linechart from "@/components/Product/Motorcade/Linechart.vue";
import Linechart2 from "@/components/Product/Motorcade/Linechart2.vue";
import HistogramVue from "@/components/Product/Motorcade/Histogram.vue";
import HistogramVue2 from "@/components/Product/Motorcade/Histogram2.vue";
import PiechartVue from "@/components/Product/Motorcade/Piechart.vue"; 
import PiechartVue2 from "@/components/Product/Motorcade/Piechart2.vue"; 
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

.mainbox {
  min-width: 1024px;
  max-width: 1920px;
  padding: 1.125rem 1.125rem 0;
  display: flex;
}

.mainbox .column {
  flex: 3;
}

.mainbox .column:nth-child(2) {
  flex: 5;
  margin: 0 1.125rem 1.1875rem;
  overflow: hidden;
}

.panel {
  position: relative;
  height: 12.875rem;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: rgba(255, 255, 255, 0.04) url(@/components/Product/Motorcade/imgs/line\(1\).png);
  padding: 0 1.1875rem 1.5rem;
  margin-bottom: 1.1875rem;
}

.panel::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
  border-radius: 20%;
}

.panel::after {
  position: absolute;
  top: 0;
  right: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
  border-radius: 20%;
}

.panel .panel-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}

.panel .panel-footer::before {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
  border-radius: 20%;
}

.panel .panel-footer::after {
  position: absolute;
  bottom: 0;
  right: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
  border-radius: 20%;
}

.panel h2 {
  height: 1.6rem;
  line-height: 1.6rem;
  text-align: center;
  /* color: #fff; */
  font-size: 1.25rem;
  font-weight: 400;
}

.panel h2 a {
  margin: 0 1.1875rem;
  color: #fff;
  text-decoration: underline;
}

.panel .chart {
  height: 200px;
}

.no {
  background: rgba(101, 132, 226, 0.1);
  padding: 1.1875rem;
}

.no .no-hd {
  position: relative;
  border: 1px solid rgba(25, 186, 139, 0.17);
}

.no .no-hd::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
  top: 0;
  left: 0;
}

.no .no-hd::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
  right: 0;
  bottom: 0;
}

.no .no-hd ul {
  display: flex;
}

.no .no-hd ul li {
  position: relative;
  flex: 1;
  text-align: center;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.875rem;
  color: #f98e41;
  padding: 0.15rem 0;
  font-family: electronicFont;
  font-weight: bold;
}

.no .no-hd ul li:first-child::after {
  content: "";
  position: absolute;
  height: 50%;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
  right: 0;
  top: 25%;
}

.no .no-bd ul {
  display: flex;
}

.no .no-bd ul li {
  flex: 1;
  height: 3.5rem;
  line-height: 2.5rem;
  text-align: center;
  font-size: 1.225rem;
  color: #7470ee;
  padding-top: 1.125rem;
}

.map {
  position: relative;
  height: 30.125rem;
}

.map .chart {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  height: 30.125rem;
  width: 100%;
}

.map .map1,
.map .map2,
.map .map3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18.475rem;
  height: 18.475rem;
  background: url(@/components/Product/Motorcade/imgs/map.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0.3;
}

.map .map2 {
  width: 24.0375rem;
  height: 24.0375rem;
  background-image: url(@/components/Product/Motorcade/imgs/lbx.png);
  opacity: 0.6;
  animation: rotate 15s linear infinite;
  z-index: 2;
}

.map .map3 {
  width: 21.075rem;
  height: 21.075rem;
  background-image: url(@/components/Product/Motorcade/imgs/jt.png);
  animation: rotate1 10s linear infinite;
}

@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@media screen and (max-width: 1024px) {
  html {
    font-size: 42px !important;
  }
}

@media screen and (min-width: 1920) {
  html {
    font-size: 80px !important;
  }
}
</style>