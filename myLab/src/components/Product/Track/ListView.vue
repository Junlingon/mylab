<template>
    <div id="explore-container">
        <div class="example-list-panel">
            <div>
                <h3 id="chart-type-line" class="chart-type-head">
                    赛道图
                    <span>Track</span>
                </h3>
                <div id="chart-row-line" class="row">
                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div class="example-list-item"><a target="_blank" href="./editor.html?c=line-simple"
                                class="example-link">
                                <picture>
                                    <source
                                        data-srcset="https://echarts.apache.org/examples/data/thumb/line-simple.webp?_v_=1666243043416"
                                        type="image/webp"
                                        srcset="https://echarts.apache.org/examples/data/thumb/line-simple.webp?_v_=1666243043416">
                                    <source
                                        data-srcset="https://echarts.apache.org/examples/data/thumb/line-simple.png?_v_=1666243043416"
                                        type="image/png"
                                        srcset="https://echarts.apache.org/examples/data/thumb/line-simple.png?_v_=1666243043416">
                                    <img src="./../asset/placeholder.jpg" class="chart-area entered ec-shot-loaded"
                                        data-ll-status="loaded">
                                </picture>
                            </a>
                            <div>
                                <div>
                                    <div title="基础折线图" class="example-title">基础折线图</div>
                                    <div class="example-subtitle">Basic Line Chart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div class="example-list-item">
                            <a target="_blank" href="./editor.html?c=line-smooth"
                                class="example-link">
                                <picture>
                                    <source
                                        data-srcset="https://echarts.apache.org/examples/data/thumb/line-smooth.webp?_v_=1666243043416"
                                        type="image/webp"
                                        srcset="https://echarts.apache.org/examples/data/thumb/line-smooth.webp?_v_=1666243043416">
                                    <source
                                        data-srcset="https://echarts.apache.org/examples/data/thumb/line-smooth.png?_v_=1666243043416"
                                        type="image/png"
                                        srcset="https://echarts.apache.org/examples/data/thumb/line-smooth.png?_v_=1666243043416">
                                    <img src="./../asset/placeholder.jpg" class="chart-area entered ec-shot-loaded"
                                        data-ll-status="loaded">
                                </picture>
                            </a>
                            <div>
                                <div>
                                    <div title="基础平滑折线图" class="example-title">基础平滑折线图</div>
                                    <div class="example-subtitle">Smoothed Line Chart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div class="example-list-item">
                            <a @click="gotoEdit"
                                class="example-link">
                                <picture>
                                    <img src="@/assets/img/plus.jpg" class="chart-area entered ec-shot-loaded"
                                        data-ll-status="loaded">
                                </picture>  
                            </a>
                            <div>
                                <div>
                                    <div title="基础平滑折线图" class="example-title">添加新赛道</div>
                                    <div class="example-subtitle">Add Line Chart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { reactive, defineProps, defineEmits, watch, ref, toRefs } from 'vue' 
const emits = defineEmits(['changeEdit']);

function gotoEdit(){
    emits('changeEdit');
}

</script>


<style scoped>

#explore-container {
    /* margin-left: 220px; */
    padding: 10px 10px;
}
.example-list-panel {
    margin: 30px 15px 30px 15px;
}
.example-list-panel h3 {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e1e5f2;
    font-weight: normal;
    color: #464646;
    font-size: 20px;
}
.example-list-panel .chart-type-head span {
    font-size: 16px;
    padding-left: 5px;
    color: #949cb1;
    font-weight: 200;
}
.row {
    margin-right: -15px;
    margin-left: -15px;
}
.row:before {
    display: table;
    content: " ";
}
.col-xl-2, .col-md-4{
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 50px;
    display: inline-block;
} 
.example-list-item {
    width: 100%;
    max-width: 350px;
    margin-bottom: 30px;
    position: relative;
}
.example-list-item .example-link {
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 0 0 20px rgb(0 0 0 / 5%);
    overflow: hidden;
    display: block;
}
a {
    background-color: transparent;
}
a {
    color: #337ab7;
    text-decoration: none;
}
.example-list-item .chart-area {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: 0.3s ease-in-out;
}
img {
    max-width: 100%;
}
img {
    vertical-align: middle;
}
.example-list-item .example-langs {
    margin-top: 10px;
    float: right;
}
.example-list-item .example-langs > * {
    display: inline-block;
    padding: 1px 6px;
    margin-left: 5px;
    vertical-align: middle;
    border-radius: 3px;
    font-size: 10px;
    opacity: 0.8;
}
.example-list-item .example-langs .js {
    background: #f7df1e;
    color: #444;
}
.example-list-item .example-langs .ts {
    background: #3178c6;
    color: #eee;
}

.example-list-item .example-title {
    color: #293c55;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 10px 10px 2px 10px;
    margin: 0;
    display: block;
    font-size: 14px;
    text-align: left;
}
.example-list-item .example-subtitle {
    font-size: 12px;
    text-align: left;
    color: #aaa;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 3px 0 0 0;
    padding-left: 10px;
}
.example-list-item .chart-area:hover {
    transform: scale(1.2);
}
</style>