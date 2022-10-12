<template>
    <el-button text @click="open"></el-button>
  </template>
  
  <script lang="ts" setup>
  import { ElMessage, ElMessageBox } from 'element-plus'
  import  Service  from "@/utils/Api"
  const open = () => {
    ElMessageBox.prompt('请输入新密码', '修改密码', {
      confirmButtonText: '确定',
      cancelButtonText: '返回',
      inputErrorMessage: 'Invalid password',
    })
      .then(({ value }) => {
        const res:any= Service.Service.replacePassword({
        usename:localStorage.getItem("username"),
        password: value,
        });
        ElMessage({
          type: 'success',
          message: `修改成功`,
        })
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
  