<template>
    <span class="header-item">公告
        <div class="subnav animate-fade">
            <ul>
                <li v-for="(item,index) in gridData" :key="item.id" @click="open($event)" :num="item.id">
                    <img :src="imgs[index]" alt="" />
                    <p class="context">{{item.title}}</p>
                    <p class="context">{{item.context}}</p>
                </li>
            </ul>
        </div>
    </span>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import router from '@/router/index'
import Service from "@/utils/Api"
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'
import img1 from "@/assets/img/199f.png"
import img2 from "@/assets/img/287d.png"
import img3 from "@/assets/img/874a.png"

const imgs = ref([img1, img2, img3])

const open = (e: any) => {
    // console.log(e.currentTarget.getAttribute("num"));
    const id = e.currentTarget.getAttribute("num")
    const res: any = Service.Service.NoticeDetails({
        id,
    });
    console.log(res);
    res.then((r:any)=>{
        console.log(r);
        
         ElMessageBox.alert(`${r.data.context}`, `${r.data.title}`, {
        // if you want to disable its autofocus
        // autofocus: false,
        confirmButtonText: '收到',
        // callback: (action: Action) => {
        //     ElMessage({
        //         type: 'info',
        //         message: `action: ${action}`,
        //     })
        // },
    })
    }).catch((e:any)=>{
        // console.log(e);
        setTimeout(() => {
          router.push("/login");
        }, 900)
        ElMessage({
          type: 'error',
          message: `${e.data.msg}`,
        })
    })
    
}

//获取公告信息
const gridData = ref([])
const getdetails = async () => {
    const res: any = await Service.Service.NoticeList({
        page: 1,
        limit: 5
    });
    console.log(res);
    gridData.value = res.data.list;
    //   console.log(gridData.value);
};


onMounted(() => {
    getdetails()
})
</script>

<style>
.header-item {
    position: relative;
    display: inline-block;
    padding: 20px;
    margin-left: 80px;
    font-size: 24px;
    color: #0f1011;
    cursor: pointer;
    transition: color 1s;
}

nav .header-item:hover {
    color: #1c16df;
}

.subnav {
    position: absolute;
    top: 100%;
    left: 50%;
    z-index: 2;
    width: 180px;
    padding: 30px 20px;
    white-space: nowrap;
    background-color: #fff;
    border-bottom: 2px solid #1616df;
    box-shadow: 5px 10px 8px rgb(0 0 0 / 10%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
}

.subnav.animate-fade {
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s, -webkit-transform 0.5s;
    transition: opacity 0.5s, transform 0.5s;
    transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
    -webkit-transform: translateX(-50%) translateY(-10px);
    -ms-transform: translateX(-50%) translateY(-10px);
    transform: translateX(-50%) translateY(-10px);
}

nav .header-item:first-of-type .subnav {
    width: 220px;
}

nav .header-item:hover .subnav.animate-fade {
    pointer-events: auto;
    opacity: 1;
    -webkit-transform: translateX(-50%) translateY(0);
    -ms-transform: translateX(-50%) translateY(0);
    transform: translateX(-50%) translateY(0);
}

.subnav:before {
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 20px;
    content: "";
}

.subnav ul {
    padding: 0;
    margin: 0;
}

.subnav li {
    margin: 0 0 20px;
    overflow: hidden;
    list-style: none;
}

.subnav a {
    display: block;
    overflow: hidden;
    text-decoration: none;
}

img {
    vertical-align: middle;
    border-style: none;
}

.subnav li img {
    float: left;
    width: 40px;
    height: 40px;
    margin-right: 20px;
    object-fit: contain;
}

.subnav li p {
    margin: 0;
    font-size: 16px;
    line-height: 20px;
    color: #0f1011;
    vertical-align: top;
    transition: color 1s;
}

.subnav li p:first-of-type {
    font-weight: 700;
}

.subnav li p~p {
    font-size: 12px;
    line-height: 20px;
    color: #707070;
    vertical-align: bottom;
}

.subnav .title {
    width: 40px;
    margin-top: 0px;
    margin-bottom: 12px;
    font-size: 16px;
    color: #505050;
    text-align: center;
}

.header-item p {
    line-height: 35px;
}

.context {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>