<template>
    <ProductHeader></ProductHeader>
    <LeftMenu></LeftMenu>
    <div>
        <EchartsVue></EchartsVue>
    </div>
</template>


<script lang="ts" setup>
import LeftMenu from "@/components/Product/LeftMenu.vue"
import ProductHeader from "@/components/Product/ProductHeader.vue"
import EchartsVue from "@/assets/Motorcade/Echarts.vue";
</script>