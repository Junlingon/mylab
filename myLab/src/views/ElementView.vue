<template>
    <ProductHeader></ProductHeader>
    <LeftMenu></LeftMenu>
    <div style="margin-left: 200px;background-color: #f0f0f0;height: 100vh;">
        <header>
            <h1>元素树状图</h1>
            <div class="showTime">当前时间：2022年1月<span></span></div>
        </header>
        <div class="charts">
            <ThreeChartVue></ThreeChartVue>
        </div>
        <div class="lbt">
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 text="2xl" justify="center">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>


<script lang="ts" setup>
import LeftMenu from "@/components/Product/LeftMenu.vue"
import ProductHeader from "@/components/Product/ProductHeader.vue"
import ThreeChartVue from "@/components/Product/Element/ThreeChart.vue";
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

/* .charts{
    width: 600px;
    height: 800px;
} */
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
.lbt{
    width: 80%;
    margin: 25px auto;
}
</style>