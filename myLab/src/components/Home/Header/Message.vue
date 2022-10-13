<template>
    <el-drawer v-model="drawer" title="消息列表" size="50%">
      <div>
        <el-button @click="innerDrawer = true">Click me!</el-button>
        <el-drawer
          v-model="innerDrawer"
          title="消息内容"
          :append-to-body="true"
          
        >
          <p>_(:зゝ∠)_</p>
        </el-drawer>
      </div>
    </el-drawer>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { ElMessageBox } from 'element-plus'
  
  const drawer = ref(false)
  const innerDrawer = ref(false)
  
  const handleClose = (done: () => void) => {
    ElMessageBox.confirm('You still have unsaved data, proceed?')
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
  }


  //暴露方法 给父组件调用
  defineExpose({
  //父组件调用 初始化方法
  drawer,
});
  </script>
  