<template>
  <section>
    <div class="content">
      <div class="divider"></div>
      <div class="header">
        <div class="names">
          <span class="name-en">Technology</span
          ><span class="name">技术根基</span>
        </div>
        <a
          href="https://jelly.jd.com/teamhome/5b0ff3a0629834a34b663617"
          target="_blank"
          rel="noopener noreferrer"
          ><div class="more">
            <span>更多</span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="11.51"
              viewBox="0 0 50 11.51"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs></defs>
              <g
                id="\u7EC4_15864"
                data-name="\u7EC4 15864"
                transform="translate(-3341.81 -1380.443)"
              >
                <rect
                  id="\u77E9\u5F62_73"
                  data-name="\u77E9\u5F62 73"
                  class="cls-1"
                  width="50"
                  height="2.804"
                  transform="translate(3341.81 1389.149)"
                ></rect>
                <rect
                  id="\u77E9\u5F62_74"
                  data-name="\u77E9\u5F62 74"
                  class="cls-1"
                  width="12.327"
                  height="2.804"
                  transform="translate(3383.093 1380.443) rotate(45)"
                ></rect>
              </g>
            </svg></div
        ></a>
      </div>
      <div class="main-pc">
        <div class="wrapper1">
          <a
            href="https://3.cn/18ZF-qlm"
            target="_blank"
            rel="noopener noreferrer"
            ><div class="wrapper-inner">
              <div class="content-img">
                <img
                  class="img-inner"
                  src="https://img10.360buyimg.com/neos/jfs/t1/153028/12/21038/36211/604072f5Ef8d987df/60587450466f2c3e.png"
                  alt="你好 Hooks，再见2020"
                />
              </div>
              <div class="content-intro">
                <div class="title">
                  <div class="name">你好 Hooks，再见2020</div>
                  <div class="desc">
                    不知不觉，蒲公英已经伴随我们走过了一年时光，在这一年我们...
                  </div>
                </div>
                <time class="date">2021-01-23</time>
              </div>
            </div></a
          >
        </div>
        <div class="wrapper2">
          <div
            class="item"
            style="
              background-position: center center;
              background-size: cover;
              background-repeat: no-repeat;
              background-image: url('https://img12.360buyimg.com/neos/jfs/t1/169029/14/4716/2893/6012b273E61fbd150/406a1cb8de2d7877.png');
            "
          >
            <a
              href="https://jelly.jd.com/article/60179c1b69400c0171bb024d"
              target="_blank"
              rel="noopener noreferrer"
              ><div class="item-inner">
                <div class="title">
                  <div class="name">
                    使用Phaser3+Matter.js实现“合成大西瓜”游戏
                  </div>
                  <div class="desc">
                    最近有一款“合成大西瓜”的小游戏有点火，试玩了一下，玩法比较简单，实现难度也不大，所以参照游戏原型自己实现了一下，游戏开发主要使用了Phaser游戏框架，本文主要分享游戏功能的具体实现，对框架使用的API不会做过多介绍。
                  </div>
                </div>
                <time class="date">2021-02-05</time>
              </div></a
            >
          </div>
          <div class="item-img">
            <a
              href="https://jelly.jd.com/course/5fb360e2157ab9926af3117e"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                class="img-inner"
                src="https://img11.360buyimg.com/neos/jfs/t1/160347/13/9791/21499/60407612E697c161f/43766de5ff3a2b2f.png"
                alt="技术主题沙龙"
            /></a>
          </div>
        </div>
        <div class="wrapper3">
          <div class="item">
            <a
              href="https://guide.aotu.io/"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                class="img-inner"
                src="https://img12.360buyimg.com/neos/jfs/t1/168107/12/9105/37303/60407325Ebf3e2a86/581e97ff668fd351.png"
                alt="前端代码规范"
            /></a>
          </div>
          <div class="item last">
            <a
              href="https://github.com/o2team/"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                class="img-inner"
                src="https://img10.360buyimg.com/neos/jfs/t1/164766/39/9037/37036/6040733dE7b29798f/afed79ba2aa040c1.png"
                alt="github"
            /></a>
          </div>
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
<style scoped>
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
.header .names .name-en {
  font-size: 68px;
  font-weight: 700;
  color: #1c16df;
}
.header .names .name {
  margin-left: 30px;
  font-size: 30px;
  font-weight: 700;
}
.header .more {
  display: flex;
  align-items: center;
  width: 6rem;
  font-size: 1.3rem;
  color: #0f1011;
}
.header .more svg {
  width: 2rem;
  margin-left: 0.5rem;
  fill: #c2c3c4;
}
.main-pc {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 55%;
  margin-top: 78px;
}
.wrapper1 {
  box-sizing: border-box;
  width: 28.9%;
  overflow: hidden;
  border: 1px solid #707070;
  transition: box-shadow 0.2s, -webkit-transform 0.2s;
  transition: transform 0.2s, box-shadow 0.2s;
  transition: transform 0.2s, box-shadow 0.2s, -webkit-transform 0.2s;
}
.wrapper1 .wrapper-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.wrapper1 .wrapper-inner .content-img {
  width: 100%;
  height: 290px;
  overflow: hidden;
}
img {
  vertical-align: middle;
  border-style: none;
}
.wrapper1 .wrapper-inner .content-img .img-inner {
  width: 100%;
  height: 101%;
  object-fit: cover;
}
.wrapper1 .wrapper-inner .content-intro {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: 1.2rem 1.8rem;
  overflow: hidden;
  color: #fff;
  background-color: #0f1011;
}
.wrapper1 .wrapper-inner .content-intro .title {
  flex-grow: 1;
}
.wrapper1 .wrapper-inner .content-intro .name {
  display: -webkit-box;
  overflow: hidden;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.5rem;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.wrapper1 .wrapper-inner .content-intro .desc {
  display: -webkit-box;
  margin-bottom: 10px;
  overflow: hidden;
  font-size: 0.9rem;
  font-weight: 100;
  line-height: 1.6rem;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.wrapper-inner .content-intro .date {
  font-size: 1.1rem;
}
.wrapper2 {
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  width: 39%;
  height: 100%;
}
.wrapper2 .item {
  width: 100%;
  height: 48%;
  overflow: hidden;
  border: 1px solid #c2c3c4;
  transition: box-shadow 0.2s, -webkit-transform 0.2s;
  transition: transform 0.2s, box-shadow 0.2s;
  transition: transform 0.2s, box-shadow 0.2s, -webkit-transform 0.2s;
}
.wrapper2 .item .item-inner {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1.2rem;
  overflow: hidden;
  color: #0f1011;
}
.wrapper2 .item .item-inner .title {
  flex-grow: 1;
}
.wrapper2 .item .item-inner .name {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.6rem;
}
.wrapper2 .item .item-inner .desc {
  display: -webkit-box;
  overflow: hidden;
  font-size: 0.9rem;
  font-weight: 100;
  line-height: 1.6rem;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.wrapper2 .item-img {
  width: 100%;
  height: 48%;
  transition: box-shadow 0.2s, -webkit-transform 0.2s;
  transition: transform 0.2s, box-shadow 0.2s;
  transition: transform 0.2s, box-shadow 0.2s, -webkit-transform 0.2s;
}
.wrapper2 .item-img .img-inner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.wrapper3 {
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28.9%;
  height: 100%;
}
.wrapper3 .item {
  width: 100%;
  height: 48%;
  border: 1px solid #707070;
  transition: box-shadow 0.2s, -webkit-transform 0.2s;
  transition: transform 0.2s, box-shadow 0.2s;
  transition: transform 0.2s, box-shadow 0.2s, -webkit-transform 0.2s;
}
.wrapper3 .item .img-inner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.wrapper3 .last {
  border: none;
}
.wrapper1:hover {
  box-shadow: 3px 3px 3px #ccc;
  -webkit-transform: translateY(-5px);
  -ms-transform: translateY(-5px);
  transform: translateY(-5px);
}
.wrapper2 .item:hover {
  box-shadow: 3px 3px 3px #ccc;
  -webkit-transform: translateY(-5px);
  -ms-transform: translateY(-5px);
  transform: translateY(-5px);
}
.wrapper2 .item-img:hover {
  box-shadow: 3px 3px 3px #ccc;
  -webkit-transform: translateY(-5px);
  -ms-transform: translateY(-5px);
  transform: translateY(-5px);
}
.wrapper3 .item:hover {
  box-shadow: 3px 3px 3px #ccc;
  -webkit-transform: translateY(-5px);
  -ms-transform: translateY(-5px);
  transform: translateY(-5px);
}
</style>