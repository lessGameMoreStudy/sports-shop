<template>
    <div class="footbar">
        <ul class="footBar">            
            <router-link tag='li' to="/home">
                <img src="../../assets/img/weibiaoti--2.png" alt="">
                <span>首页</span>
            </router-link>
            <router-link tag="li" to="/list">
                <img src="../../assets/img/fenlei2.png" alt="">
                <span>分类</span>
            </router-link>
            <router-link tag="li" to="/shopcar">
                <img src="../../assets/img/shopcar02.png" alt="">
                <span>购物车</span>
            </router-link>
            <router-link tag="li" to="/user">
                <img src="../../assets/img/wode2.png" alt="">
                <span>我的</span>
            </router-link>                
        </ul>
    </div>
</template>

<style scoped>
    .footBar {
        position: fixed;
        bottom: 0;
        z-index: 999;
        height: 2.5rem;
        display: flex;
        width: 100%;
        border-top: 1px solid #eee;
        background: white;
    }
    .footBar li {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .footBar li img {
        width: 1rem;
        height: 1rem;
    }
    .footBar li span {
        font-family: '幼圆';
        font-size: 14px;
        color: #1296db;
    }
</style>