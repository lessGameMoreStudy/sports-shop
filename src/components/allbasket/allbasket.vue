<template>
    <div class="allbasket">
        <header>所有篮球</header>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                <router-link :to="{name:'Detail',params:{url:item.url,ind:item.ind,price:item.price}}">
                    <img :src='item.url' alt="">
                </router-link>
                <p>{{item.ind}}</p>
                <span>{{item.price}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'allbasket',
    data() {
        return {
            list:[
                {url:'http://sports-shop.oss-cn-shanghai.aliyuncs.com/img/ALL%20SURFACE01.jpeg',ind:'斯伯丁官方旗舰店高弹力空心胶球LOGO系列 51-173y',price:'￥ 25.00'},
                {url:'http://sports-shop.oss-cn-shanghai.aliyuncs.com/img/ALL%20SURFACE02.jpeg',ind:'斯伯丁官方旗舰店高弹力空心胶球LOGO系列 51-173y',price:'￥ 25.00'},
                {url:'https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/Highlight08.jpeg',ind:'斯伯丁官方旗舰店高弹力空心胶球LOGO系列 51-173y',price:'￥ 25.00'},
                {url:'http://sports-shop.oss-cn-shanghai.aliyuncs.com/img/ALL%20SURFACE05.jpeg',ind:'斯伯丁官方旗舰店高弹力空心胶球LOGO系列 51-173y',price:'￥ 25.00'},
                {url:'http://sports-shop.oss-cn-shanghai.aliyuncs.com/img/ALL%20SURFACE06.jpeg',ind:'斯伯丁官方旗舰店高弹力空心胶球LOGO系列 51-173y',price:'￥ 25.00'},
                {url:'http://sports-shop.oss-cn-shanghai.aliyuncs.com/img/ALL%20SURFACE08.jpeg',ind:'斯伯丁官方旗舰店高弹力空心胶球LOGO系列 51-173y',price:'￥ 25.00'} 
            ]
        }
    },
}
</script>
<style scoped>
    .allbasket {
        width: 100%;
    }
    header {
        width: 100%;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        background: #1296db;
        color: white;
    }
    ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    li {
        width: 50%;
        box-sizing: border-box;
        border-bottom: 1px solid #999;
    }
    li:nth-child(2n) {
        border-left: 1px solid #999;
    }
    li img {
        width: 80%;
        height: 10rem;
        margin: 0 auto;
    }
    li p {
        width: 80%;
        font-size: 14px;
        margin: 0 auto;
    }
    li span {
        font-weight: bold;
        padding-left: 6rem;
        line-height: 2rem;
    }
</style>