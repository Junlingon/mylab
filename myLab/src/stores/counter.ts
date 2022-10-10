import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('use', () => {

  const baseHost = ref("http://121.41.112.205:8088")
  //接口地址
  const apiurl = "http://121.41.112.205:8088";

  //图片拼接路径
  const imgurl = "http://121.41.112.205:8088/img/images?fileName=";

  return { baseHost }
})
