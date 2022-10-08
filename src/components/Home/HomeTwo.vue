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
          <div class="backward">左箭头</div>
          <div class="vertical-divider"></div>
          <div class="forward can-turning">右箭头</div>
        </div>
      </div>
      <div class="main">
        <div class="wrapper">
          <a
            href="https://jelly.jd.com/article/5fe58d1bb402750151b4e119"
            target="_blank"
            rel="noopener noreferrer"
            ><div class="content-img">
              <img
                class="img-inner"
                src="https://img13.360buyimg.com/neos/jfs/t1/168752/36/8584/11896/603ca938Ee18dae39/8ad3e0a2d3c60a21.png"
                alt="凹凸实验室"
              />
            </div>
            <div class="content-underline"></div>
            <div class="content-name">凹凸实验室</div>
            <div class="content-desc">凹凸实验室的过去与未来</div></a
          >
        </div>
        <div class="wrapper wrapper-odd">
          <a
            href="https://jelly.jd.com/article/5fe58e83b402750151b4e12b"
            target="_blank"
            rel="noopener noreferrer"
            ><div class="content-img">
              <img
                class="img-inner"
                src="https://img11.360buyimg.com/neos/jfs/t1/171061/27/8667/50069/603ca1fdE3487a905/0ea130c3c48a3142.png"
                alt="智能设计平台"
              />
            </div>
            <div class="content-underline"></div>
            <div class="content-name">智能设计平台</div>
            <div class="content-desc">逐梦设计数智化</div></a
          >
        </div>
        <div class="wrapper">
          <a
            href="https://jelly.jd.com/article/5fec7fa0468efc014a4e5309"
            target="_blank"
            rel="noopener noreferrer"
            ><div class="content-img">
              <img
                class="img-inner"
                src="https://img13.360buyimg.com/neos/jfs/t1/156356/22/11840/11189/603ca84fE94bbfe59/7c1dbad091b04e45.png"
                alt="羚珑页面可视化搭建"
              />
            </div>
            <div class="content-underline"></div>
            <div class="content-name">羚珑页面可视化搭建</div>
            <div class="content-desc">成长蜕变之路</div></a
          >
        </div>
        <div class="wrapper wrapper-odd">
          <a
            href="https://jelly.jd.com/article/5fffb946d0ab640145e75e95"
            target="_blank"
            rel="noopener noreferrer"
            ><div class="content-img">
              <img
                class="img-inner"
                src="https://img11.360buyimg.com/neos/jfs/t1/161507/40/8742/9568/603ca867Efbeee86a/e39ac3dd17c963a0.png"
                alt="基础服务体系"
              />
            </div>
            <div class="content-underline"></div>
            <div class="content-name">基础服务体系</div>
            <div class="content-desc">构筑服务端技术中枢</div></a
          >
        </div>
        <div class="wrapper wrapper-last">
          <a
            href="https://jelly.jd.com/article/5ffbc4fcdd7c080151c80c74"
            target="_blank"
            rel="noopener noreferrer"
            ><div class="content-img">
              <img
                class="img-inner"
                src="https://img13.360buyimg.com/neos/jfs/t1/163597/16/8457/6747/603ca886Eb3b429bb/2f2302fd69479962.png"
                alt="DECO"
              />
            </div>
            <div class="content-underline"></div>
            <div class="content-name">DECO</div>
            <div class="content-desc">智能代码·开启产研效率革命</div></a
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
// import Vue from 'vue'
// export default Vue.extend({

// })
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