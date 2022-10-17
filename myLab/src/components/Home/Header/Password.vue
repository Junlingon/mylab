<template>
  <el-button text @click="open"></el-button>
</template>
  
<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import Service from "@/utils/Api"
import router from '@/router/index'
const open = () => {
  ElMessageBox.prompt('请输入新密码', '修改密码', {
    confirmButtonText: '确定',
    cancelButtonText: '返回',
    inputErrorMessage: 'Invalid password',
  })
    .then(({ value }) => {
      const res: any = Service.Service.replacePassword({
        username: localStorage.getItem("username"),
        password: value,
      });
      return res  
    }).then((r)=>{ //获取到请求的结果
      console.log(r);
       if (r.code == 200) {
        ElMessage({
          type: 'success',
          message: `修改成功,请重新登录`,
        })
        setTimeout(() => {
          router.push("/login");
        }, 900)
        Service.Service.logout({});
        localStorage.clear();
      } else {   
        ElMessage({
          type: 'error',
          message: `${r.msg}`,
        })
      }
      })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Input canceled',
      })
    })
}
//暴露方法 给父组件调用
defineExpose({
  //父组件调用 初始化方法
  open,
});
</script>
  