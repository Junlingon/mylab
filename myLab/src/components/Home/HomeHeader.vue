<template>
  <header>
    <div class="headerBox">
      <a href="/" class="logo">实验室管理系统</a>
      <nav style="display: flex; align-items: center">
        <span class="header-item"
          >公告
          <div class="subnav animate-fade">
            <ul>
              <li>
                <a
                  href="https://ling.jd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="https://img10.360buyimg.com/neos/jfs/t1/168113/22/8241/5499/60361186E2fd9c85b/8128d1a04f01874a.png"
                    alt=""
                  />
                  <p>公告一</p>
                  <p>一站式线上智能设计服务平台</p></a
                >
              </li>
              <li>
                <a
                  href="https://taro.jd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="https://img13.360buyimg.com/neos/jfs/t1/162526/10/5272/3402/601bad26E716f300a/8c7be7faf66c199f.png"
                    alt=""
                  />
                  <p>公告二</p>
                  <p>开放式跨端跨框架解决方案</p></a
                >
              </li>
              <li>
                <a
                  href="https://jelly.jd.com/article/5ffbc4fcdd7c080151c80c74"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="https://img12.360buyimg.com/neos/jfs/t1/162451/21/5488/4418/601baa07Ed8bae239/d54d63c9f97b287d.png"
                    alt=""
                  />
                  <p>Deco</p>
                  <p>设计稿生成多端代码</p></a
                >
              </li>
              <li>
                <a
                  href="https://jelly.jd.com/article/6006b1065b6c6a01506c885e"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="https://img13.360buyimg.com/neos/jfs/t1/154124/10/17320/3895/601bae73Ef28518dd/071dfe832174e7be.png"
                    alt=""
                  />
                  <p>Tide</p>
                  <p>研发一体化方案</p></a
                >
              </li>
            </ul>
          </div>
        </span>
        <span class="header-item"
          >日志
          <div class="subnav animate-fade">
            <p class="title">专栏</p>
            <ul>
              <li>
                <a
                  href="https://jelly.jd.com/teamhome/5b0ff3a0629834a34b663617"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="https://storage.360buyimg.com/neos-static-files/0a54778a-321b-4fba-a631-1d4786c24f20.png"
                    alt=""
                  />
                  <p>Jelly</p>
                  <p>JELLY专栏</p></a
                >
              </li>
              <li>
                <a
                  href="https://juejin.cn/user/1134351699149854"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="https://storage.360buyimg.com/neos-static-files/04ec7cce-5264-4b76-8f80-5aa8eb5cf2f8.svg"
                    alt=""
                  />
                  <p>掘金</p>
                  <p>凹凸掘金专栏</p></a
                >
              </li>
            </ul>
            <p class="title">期刊</p>
            <ul>
              <li>
                <a
                  href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIxMzExMjYwOQ==&amp;action=getalbum&amp;album_id=1369610438157369345#wechat_redirect"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="https://storage.360buyimg.com/neos-static-files/d9945643-d53a-4310-aeb5-3f20d3b6e157.jpeg"
                    alt=""
                  />
                  <p>蒲公英</p>
                  <p>凹凸技术期刊</p></a
                >
              </li>
            </ul>
            <p class="title">专题</p>
            <ul>
              <li>
                <a
                  href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIxMzExMjYwOQ==&amp;action=getalbum&amp;album_id=1664686948306780160#wechat_redirect"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="https://storage.360buyimg.com/neos-static-files/9a0af747-de7b-4e87-8de0-01d70bee5eed.png"
                    alt=""
                  />
                  <p>技术揭秘</p>
                  <p>凹凸技术 5 周年揭秘</p></a
                >
              </li>
            </ul>
          </div>
        </span>
        <a href="/about"><span class="header-item">关于</span></a>
        <span class="header-item" v-if="isLogin">
          <el-avatar :size="50" :src="people" />
          <div class="subnav animate-fade">
            <ul>
              <li style="margin: unset;">
                <a
                  href="/login"
                  rel="noopener noreferrer"
                  ><img
                    src="https://storage.360buyimg.com/neos-static-files/0a54778a-321b-4fba-a631-1d4786c24f20.png"
                    alt=""
                  />
                  <p style="line-height: 35px;">点击登录</p>
                </a>
              </li>
            </ul>
          </div>
        </span>
        <span class="header-item" v-else>
          <el-avatar :size="50" :src="avatur" />
          <div class="subnav animate-fade">
            <ul>
              <li @click="news">
                <img
                    src="https://storage.360buyimg.com/neos-static-files/0a54778a-321b-4fba-a631-1d4786c24f20.png"
                    alt=""
                  />
                  <p>消息</p>
              </li>
            </ul>
            <ul>
              <li @click="open">
                <img
                    src="https://storage.360buyimg.com/neos-static-files/d9945643-d53a-4310-aeb5-3f20d3b6e157.jpeg"
                    alt=""
                  />
                  <p>修改密码</p>
              </li>
            </ul>
            <ul>
              <li @click="Signout">
                <img
                    src="https://storage.360buyimg.com/neos-static-files/9a0af747-de7b-4e87-8de0-01d70bee5eed.png"
                    alt=""
                  />
                  <p>退出登录</p>
              </li>
            </ul>
          </div>
        </span>
      </nav>
    </div>
    <Password ref="PasswordRef" ></Password>
    <Message ref="MessageRef" ></Message>
  </header>
</template>

<script lang="ts" setup>
import { reactive, toRefs,ref } from "vue";
import  Service  from "../../utils/Api"
import avatur from "../../assets/img/avatar.png"
import people from "../../assets/img/people.png"
import Password from "./Header/Password.vue"
import Message from "./Header/Message.vue"


//登录状态切换
const isLogin:boolean=localStorage.getItem("token")?false:true
//退出登录
function Signout(){
  const res = Service.Service.logout({});
  localStorage.clear();
  location=location  
}
//修改密码
const PasswordRef = ref(null)!; 
const open=()=>{
  PasswordRef.value.open()
}
//消息
const MessageRef = ref(null)!; 
const news=()=>{
  MessageRef.value.drawer=true
}
</script>

<style lang="less" scoped>
header {
  background-color: #f0f0f0;
}
.headerBox {
  width: 86%;
  height: 150px;
  max-width: 1651.2px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 4px solid #0f1011;
}
.logo {
  margin-right: auto;
  cursor: pointer;
  font-size: 40px;
  color: #0f1011;
  font-weight: 600;
}
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
.subnav li p ~ p {
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
.header-item p{
  line-height: 35px;
}
</style>