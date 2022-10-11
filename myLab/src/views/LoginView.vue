<template>
  <div class="layui-hide-xs layui-hide-sm layui-hide-md layui-show-lg-block">
    <div
      class="aui-register-popup"
      style="display: flex; flex-direction: column; justify-content: center"
    >
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-around;
        "
      >
        <div class="">
          <div class="form-pic"><img src="../assets/img/formpic.png" /></div>
        </div>
        <div class="">
          <div class="aui-register-box" style="margin: 0">
            <div class="aui-register-main">
              <div class="aui-register-link" style="width: 180px">
                <!--<a href="javascript:;" class="fl">已有账号？去登录</a>-->
                <a href="/" style="margin-left: 25px">返回首页</a>
              </div>
              <!-- <div class="aui-register-logo">
              <img src="/cxcyedu_v8/images/logo1.png" alt="">
            </div> -->
              <div class="aui-register-form" id="verifyCheck">
                <div class="register-wrap" id="register-wrap">
                  <div class="register" id="register">
                    <div class="register-top" id="reg-top">
                      <h2 class="normal" id="normal">
                        <span class="us">用户</span>登录
                      </h2>
                    </div>
                    <!--账户密码登录-->
                    <form class="register-con" id="rc">
                      <div class="layui-form">
                        <div class="layui-form-item">
                          <div>
                            <input
                              type="text"
                              name="username"
                              placeholder="账户名"
                              autocomplete="off"
                              class="layui-input"
                              lay-verify="required"
                              lay-reqtext="账户名不能为空"
                              id="username"
                              lay-vertype="tips"
                              v-model="form.username"
                            />
                          </div>
                        </div>
                        <div class="layui-form-item">
                          <div>
                            <input
                              type="password"
                              name="password"
                              placeholder="密码"
                              autocomplete="off"
                              v-model="form.password"
                              class="layui-input"
                              lay-verify="required"
                              lay-reqtext="密码不能为空"
                              id="password"
                              lay-vertype="tips"
                            />
                          </div>
                        </div>
                        <div class="layui-form-item">
                          <div class="captcha_wrap" style="display: flex">
                            <div style="flex: 1; margin-right: 20px">
                              <input
                                type="text"
                                name="captcha"
                                placeholder="验证码"
                                value=""
                                id="captcha"
                                autocomplete="off"
                                class="layui-input"
                                lay-verify="required"
                                lay-reqtext="验证码不能为空"
                                lay-vertype="tips"
                              />
                            </div>
                            <img
                              id="validCodeImg"
                              src="../images/yzm.png"
                              onclick="this.src='/captcha?d='+new Date().getTime()"
                            />
                          </div>
                        </div>
                        <div class="aui-register-form-item"
                          id="pare"
                          style="
                            margin-top: 30px;
                            display: flex;
                            justify-content: space-between;
                          "
                        >
                          <!-- <p class="aui-for-pwd">
                          <a class="" href="#">忘记密码</a>
                        </p> -->
                          <input
                            id="aui-btn-reg"
                            class="aui-btn-reg"
                            placeholder=""
                            readonly
                            value="登录"
                            lay-submit=""
                            lay-filter="*"
                            style="flex: 1; margin-right: 20px"
                            @click="submitForm"
                          />
                          <div style="width: 100px" id="regs">
                            <a
                              href="./register.html"
                              id="newRegisterBtn"
                              class="move-signup a-tag tran blue-border"
                              style="width: auto"
                              >注册</a
                            >
                          </div>
                        </div>
                      </div>
                    </form>
                    <!--<div class="aui-protocol">
            登录即同意
            <a  href="#">《创新创业网使用协议》</a>&
            <a  href="#">《隐私权条款》</a>
          </div>-->
                    <div class="aui-thirds">
                      <!-- <a
                        href="./login-student.html"
                        id="student"
                        class="active"
                      >
                        <i
                          class="iconfont icon-w_xuesheng-"
                          style="margin-right: 5px; font-size: 20px"
                        ></i>
                        <i>用户登录</i>
                      </a> -->
                      <!-- <a href="./login-daoshi.html" id="teahcer">
                        <i class="iconfont icon-jiaoshi" style="margin-right: 5px;font-size: 16px;"></i>
                        <i>导师登录</i>
                      </a> -->
                      <!-- <a href="./login-pw.html" id="jugder">
                        <i
                          class="iconfont icon-navbar_guanzhong_xuanzhong"
                          style="margin-right: 5px; font-size: 16px"
                        ></i>
                        <i>评委登录</i>
                      </a> -->
                      <div class="clear"></div>
                    </div>
                    <div id="zhmm" style="display: none">
                      <span>忘记密码？</span>
                      <a href="javascript:void(0);" class="fl get_back"
                        >找回密码</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import  Service  from "../utils/Api"
import _ from "lodash";
import { ElMessage } from "element-plus";
import { getCurrentInstance, ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
const { proxy, ctx }: any = getCurrentInstance();
const $router = useRouter();
//定义参数
const form = ref({
  username: "", //账号
  password: "", //密码
})


//登录按钮
const submitForm = async () => {
  if (_.trim(form.value.username) && _.trim(form.value.password)) {
    const res:any= await Service.Service.login({
      username: form.value.username,
      password: form.value.password,
    });
    if(res.data==null){
      ElMessage({
      dangerouslyUseHTMLString: true,
      message: `账号或者密码错误`,
      type: "error",
      showClose: true,
    });
    }else{
      localStorage.setItem("token", res.data.tokenValue);
      $router.push({ path: "/" });
    }
    
  } else {
    ElMessage({
      dangerouslyUseHTMLString: true,
      message: `请输入正确账号密码`,
      type: "warning",
      showClose: true,
    });
  }
};
</script>


<style scoped>
.layui-hide-xs {
  background-image: url("../assets/img/bg.jpg");
  min-height: 100vh;
}
.aui-register-popup {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-image: url("../assets/img/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
img {
  vertical-align: middle;
}
.aui-register-box {
  position: relative;
  width: 520px;
  padding-bottom: 10px;
  margin-top: 10%;
  margin-left: 35%;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 25px;
  border-radius: 12px;
}
.aui-register-main {
  position: relative;
  width: 500px;
  padding: 5px;
  border-radius: 12px;
  background-color: #ffffff;
  overflow: hidden;
  margin: 0 auto;
}
.aui-register-link {
  position: absolute;
  width: 136px;
  height: 110px;
  background: url("../assets/img/sqbg.png") no-repeat;
  background-size: 100% 100%;
  right: -70px;
  top: 0;
  padding-left: 60px;
  font-size: 14px;
}
a {
  background-color: transparent;
}

.aui-register-link a {
  color: #fff;
  text-decoration: none;
  line-height: 50px;
  /* margin-left: 40px; */
}
.register-wrap {
  overflow: hidden;
}
.register-wrap .register {
  width: 100%;
  display: inline-block;
}
.register-wrap .register .register-top {
  /* padding-top: 20px; */
  text-align: center;
  width: 350px;
  margin: 0 auto;
}
.register-wrap .register .register-top h2 {
  cursor: pointer;
  width: 350px;
  color: #999;
  font-size: 22px;
  line-height: 80px;
  font-weight: normal;
  text-align: center;
}
.register-wrap .register .register-top h2.normal {
  top: 4px;
  color: #333;
  text-align: center;
}
register-top:after {
  content: "";
  display: block;
  clear: both;
}
.layui-form-item {
  width: 350px;
  margin: 15px auto;
}
.layui-form-item:after {
  content: "\20";
  clear: both;
  *zoom: 1;
  display: block;
  height: 0;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
.layui-btn,
.layui-input,
.layui-select,
.layui-textarea,
.layui-upload-button {
  outline: 0;
  /* -webkit-appearance: none; */
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  box-sizing: border-box;
}
.layui-badge-rim,
.layui-border,
.layui-colla-content,
.layui-colla-item,
.layui-collapse,
.layui-elem-field,
.layui-form-pane .layui-form-item[pane],
.layui-form-pane .layui-form-label,
.layui-input,
.layui-layedit,
.layui-layedit-tool,
.layui-panel,
.layui-quote-nm,
.layui-select,
.layui-tab-bar,
.layui-tab-card,
.layui-tab-title,
.layui-tab-title .layui-this:after,
.layui-textarea {
  border-color: #eee;
}
.layui-input,
.layui-select,
.layui-textarea {
  height: 38px;
  line-height: 1.3;
  line-height: 38px\9;
  border-width: 1px;
  border-style: solid;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.85);
  border-radius: 2px;
}
.layui-input,
.layui-textarea {
  display: block;
  width: 100%;
  padding-left: 10px;
}
.layui-input {
  text-indent: 15px;
  height: 44px;
  line-height: 44px;
}
.aui-register-form-item {
  width: 350px;
  margin: 15px auto;
  position: relative;
  text-align: justify;
}
.aui-register-form-item input {
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  outline: 0;
  border: 1px solid #ebebeb;
  text-indent: 15px;
  font-size: 14px;
  /* line-height: 42px; */
  /* margin-left: -15px; */
  background: #fff;
  margin-bottom: 6px;
  padding: 10px 40px 10px 10px;
}
.aui-register-form-item .aui-btn-reg {
  width: 100%;
  height: 40px;
  outline: 0;
  border: 0;
  background: #198cff;
  color: #fff;
  cursor: pointer;
  text-align: center;
}
.a-tag {
  position: relative;
  display: block;
  height: 40px;
  border: 1px #c2c2c2 solid;
  text-align: center;
  line-height: 40px;
  color: #c2c2c2;
  border-radius: 2px;
  background-color: #fff;
  width: 350px;
  margin: 0 auto;
  font-size: 13px;
}
.blue-border {
  border: 1px #03a9f4 solid;
  color: #03a9f4;
}
.aui-thirds {
  width: 350px;
  margin: 20px auto;
  position: relative;
}
.aui-thirds a {
  text-align: center;
  float: left;
  width: 29%;
  *width: auto;
  font-size: 14px;
  line-height: 22px;
  color: #999;
  text-decoration: none;
  margin: 0 2%;
  display: flex;
  align-items: center;
}
.aui-thirds a i {
  font-style: normal;
}
.active {
  color: #23527c !important;
}
.clear {
  display: block;
  width: 0;
  height: 0;
  clear: both;
  *display: none;
}
.fl {
  float: left;
}
a:focus,
a:hover {
  color: #23527c;
  text-decoration: none;
}
.aui-register-form-item .aui-btn-reg {
  width: 100%;
  height: 40px;
  outline: 0;
  border: 0;
  background: #198cff;
  color: #fff;
  cursor: pointer;
  text-align: center;
}
</style>