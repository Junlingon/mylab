<template>
  <header>
    <div class="headerBox">
      <a href="/" class="logo">实验室管理系统</a>
      <nav>
        <span class="header-item">产品</span>
        <span class="header-item">技术</span>
        <a href=""><span class="header-item">关于</span></a>
        <span class="header-item">我</span>
      </nav>
    </div>
  </header>
</template>



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
</style>