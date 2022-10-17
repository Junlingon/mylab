<template>
  <el-drawer v-model="drawer" title="消息列表" size="50%">
    <div>
      <el-table :data="gridData" @row-click="getContent">
        <el-table-column property="title" label="消息"  />
        <el-table-column property="createTime" label="时间"  />
      </el-table>
      <!-- <el-button @click="innerDrawer = true">Click me!</el-button> -->
      <el-drawer v-model="innerDrawer" title="消息内容" :append-to-body="true">
        <p>{{content}}</p>
      </el-drawer>
    </div>
  </el-drawer>
</template>
  
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import Service from "@/utils/Api"

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
//获取详情
const gridData=ref([])
const content=ref("")
const getdetails = async () => {
  const res:any = await Service.Service.MessageList({
    page: 1,
    limit: 10
  });
  console.log(res);
  
  gridData.value = res.data.list;
  console.log(gridData.value);
  
};
const getContent=(e:any)=>{
  console.log(e);
  for(let i=0;i<gridData.value.length;i++){
    console.log(gridData.value[i]);
    if(gridData.value[i].createTime==e.createTime){
      content.value=e.context
    }
  }
  console.log(content);
  innerDrawer.value = true
}


onMounted(() => {
  getdetails()
})

//暴露方法 给父组件调用
defineExpose({
  //父组件调用 初始化方法
  drawer,
});
</script>
  