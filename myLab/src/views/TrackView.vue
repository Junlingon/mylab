<template>
    <ProductHeader></ProductHeader>
    <LeftMenu></LeftMenu>
    <div style="margin-left: 200px;position: relative;" >
        <EditVue v-if="isEdit"></EditVue>
        <ListView v-else :isEdit="isEdit" @changeEdit="changeEdit"></ListView>
    </div>
</template>


<script lang="ts" setup>
import LeftMenu from "@/components/Product/LeftMenu.vue"
import ProductHeader from "@/components/Product/ProductHeader.vue"
import EditVue from "@/components/Product/Track/Edit.vue";
import ListView from "@/components/Product/Track/ListView.vue"
import {ref} from "vue"

let isEdit=ref(false)
const changeEdit = () => {
    isEdit.value=!isEdit.value;
  };

</script>

<style scoped>



</style>