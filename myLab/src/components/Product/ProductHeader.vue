<template>
    <div id="navbar-collapse" class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-left">
            <li id="nav-index"><a href="/">首页</a></li>
        </ul>
    </div>
</template>

<style scoped>
 #navbar-collapse {
    border-top: none;
    background: #fff;
    height: 40px;
    box-shadow: 0 0 20px rgb(0 0 0 / 20%);
    z-index: 100;
    position: relative;
}
#nav-index{
    margin-left: 30px;
    font-size: 25px;
    font-weight: 600;
    
}
a{
    color: black;
}
</style>