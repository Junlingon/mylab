<template>
  <section>
    <div class="content">
      <div class="divider"></div>
      <div class="header">
        <div class="names">
          <span class="name-en">Achievement</span
          ><span class="name">五年砺银</span>
        </div>
        <div class="paging">
          <div class="backward">
            <svg id="\u7EC4_15865" data-name="\u7EC4 15865" xmlns="http://www.w3.org/2000/svg" width="50" height="11.51" viewBox="0 0 50 11.51" preserveAspectRatio="xMidYMid meet"><defs></defs><rect id="\u77E9\u5F62_73" data-name="\u77E9\u5F62 73" class="cls-1" width="50" height="2.804" transform="translate(0 8.706)"></rect><rect id="\u77E9\u5F62_74" data-name="\u77E9\u5F62 74" class="cls-1" width="12.327" height="2.804" transform="translate(10.7 1.983) rotate(135)"></rect></svg>
          </div>
          <div class="vertical-divider"></div>
          <div class="forward can-turning">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="11.51" viewBox="0 0 50 11.51" preserveAspectRatio="xMidYMid meet"><defs></defs><g id="\u7EC4_15864" data-name="\u7EC4 15864" transform="translate(-3341.81 -1380.443)"><rect id="\u77E9\u5F62_73" data-name="\u77E9\u5F62 73" class="cls-1" width="50" height="2.804" transform="translate(3341.81 1389.149)"></rect><rect id="\u77E9\u5F62_74" data-name="\u77E9\u5F62 74" class="cls-1" width="12.327" height="2.804" transform="translate(3383.093 1380.443) rotate(45)"></rect></g></svg>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="wrapper" v-for="(item,index) in ListData" :key="index" :class="{'wrapper-odd':index%2==0,'wrapper-last':index==4}">
          <a
            :href=item.href
            target="_blank"
            rel="noopener noreferrer"
            ><div class="content-img">
              <img
                class="img-inner"
                :src="item.img"
                :alt="item.contentName"
              />
            </div>
            <div class="content-underline"></div>
            <div class="content-name">{{item.contentName}}</div>
            <div class="content-desc">{{item.contentDesc}}</div></a
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import img1 from "@/assets/img/P2_1.png"
import img2 from "@/assets/img/P2_2.png"
import img3 from "@/assets/img/P2_3.png"
import img4 from "@/assets/img/P2_4.png"
import img5 from "@/assets/img/P2_5.png"

const ListData=[
  {
    img:img1,
    href:'/article/1',
    contentName:"凹凸实验室",
    contentDesc:"凹凸实验室的过去与未来"
  },
  {
    img:img2,
    href:'/article/2',
    contentName:"智能设计平台",
    contentDesc:"逐梦设计数智化",
  },
  {
    img:img3,
    href:'/article/3',
    contentName:"羚珑页面可视化搭建",
    contentDesc:"成长蜕变之路",
  },
  {
    img:img4,
    href:'/article/4',
    contentName:"基础服务体系",
    contentDesc:"构筑服务端技术中枢",
  },
  {
    img:img5,
    href:'/article/5',
    contentName:"DECO",
    contentDesc:"智能代码·开启产研效率革命",
  },
]


</script>

<style lang="less" scoped>
section {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 900px;
  overflow: hidden;
  max-height: 1080px;
  background-color: #fff;
}
.content {
  box-sizing: border-box;
  width: 86%;
  max-width: 1651.2px;
  height: 100%;
  margin: 0 auto;
  padding-top: 11vh;
}
.divider {
  width: 100%;
  height: 0.37vh;
  background-color: #0f1011;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 14%;
}
.header .names {
  display: flex;
}
.header .name-en {
  font-size: 3.3rem;
  font-weight: 700;
  color: #1c16df;
}
.header .name {
  margin-top: 1.3rem;
  margin-left: 1.9rem;
  font-size: 1.9rem;
  font-weight: 700;
}
.header .paging {
  display: flex;
  width: 10rem;
  height: 48px;
  border: 1px solid #c2c3c4;
}
.header .paging .backward,
.forward {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 49.85%;
  height: 100%;
}
.header .paging .vertical-divider {
  width: 0.3%;
  height: 100%;
  background-color: #c2c3c4;
}
.main {
  width: 100%;
  height: 55%;
  margin-top: 5.2%;
}
.wrapper {
  display: inline-block;
  width: 18.8%;
  height: 90%;
  margin-right: 1.5%;
  vertical-align: top;
}
.wrapper-odd {
  margin-top: 9%;
}
.wrapper-last {
  margin-right: 0;
}
.wrapper .content-img {
  width: 100%;
  height: 81%;
  overflow: hidden;
}
.img-inner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.wrapper .content-underline {
  width: 100%;
  height: 8px;
  background-color: #0f1011;
}
.wrapper .content-name {
  margin-top: 8%;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  color: #0f1011;
}
.wrapper .content-desc {
  font-size: 17px;
  font-weight: 300;
  line-height: 24px;
  color: #707070;
}
a:active,
a:focus,
a:hover {
  text-decoration: none;
  outline: 0;
}
a:hover {
  color: #40a9ff;
}
.wrapper:hover .content-underline {
  background-color: #1c16df;
}
.wrapper:hover .content-desc,
.wrapper:hover .content-name {
  color: #1c16df;
}
</style>