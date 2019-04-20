<template>
    <div class="home">
        <div class="slide">
            <div class="slideshow">
                <ul>
                    <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
                        <a href="#">
                            <img :src='img'>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="bar">
                <span v-for="(item, index) in imgArray" :key="index" :class="{ 'active':index===mark }"></span>
            </div>
        </div>
        <div class="mid-nav">
            <router-link tag="div" to="/allbasketball">
                <img src="../../assets/img/nav-basketball.png" alt="">
                <p>所有篮球</p>
            </router-link>
            <router-link tag="div" to="/allshang">
                <img src="../../assets/img/nav-shangyi.png" alt="">
                <p>所有上装</p>
            </router-link>
            <router-link tag="div" to="/allxia">
                <img src="../../assets/img/nav-xiazhuang.png" alt="">
                <p>所有下装</p>
            </router-link>
            <router-link tag="div" to="/allfoot">
                <img src="../../assets/img/nav-football.png" alt="">
                <p>所有足球</p>
            </router-link>
        </div>
        <div class="hot-pro">
            <p>热销产品</p>
        </div>
        <div class="hot-list">
            <div v-for="(item, index) in list" :key="index">
                <router-link :to="{name:'Detail',params:{url:item.url,ind:item.ind,price:item.price}}">
                    <img :src='item.url' alt="">
                </router-link>
                <p>{{item.ind}}</p>
                <span>{{item.price}}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'Home',
    data() {
        return {
            imgArray: [
                'http://images.spalding.com.cn/images/home-banner/2019/wbanner20190123-1.png',
                'http://images.spalding.com.cn/images/home-banner/2019/wbanner20190411-1.jpg',
                'http://images.spalding.com.cn/images/home-banner/2019/wbanner20190123-4.jpg',
            ],
            mark:0,
            bFoot:false,
            list:[
                {url:'http://sports-shop.oss-cn-shanghai.aliyuncs.com/img/ALL%20SURFACE01.jpeg',ind:'斯伯丁官方旗舰店高弹力空心胶球LOGO系列 51-173y',price:'￥ 25.00'},
                {url:'http://sports-shop.oss-cn-shanghai.aliyuncs.com/img/ALL%20SURFACE02.jpeg',ind:'斯伯丁官方旗舰店高弹力空心胶球LOGO系列 51-173y',price:'￥ 25.00'},
                {url:'http://sports-shop.oss-cn-shanghai.aliyuncs.com/img/shang06.jpeg',ind:'斯伯丁官方旗舰店高弹力空心胶球LOGO系列 51-173y',price:'￥ 25.00'},
                {url:'https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/Highlight08.jpeg',ind:'斯伯丁官方旗舰店高弹力空心胶球LOGO系列 51-173y',price:'￥ 25.00'},
                {url:'http://sports-shop.oss-cn-shanghai.aliyuncs.com/img/ALL%20SURFACE05.jpeg',ind:'斯伯丁官方旗舰店高弹力空心胶球LOGO系列 51-173y',price:'￥ 25.00'},
                {url:'http://sports-shop.oss-cn-shanghai.aliyuncs.com/img/ALL%20SURFACE06.jpeg',ind:'斯伯丁官方旗舰店高弹力空心胶球LOGO系列 51-173y',price:'￥ 25.00'},
                {url:'https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/PVC04.jpeg',ind:'斯伯丁官方旗舰店高弹力空心胶球LOGO系列 51-173y',price:'￥ 25.00'},
                {url:'http://sports-shop.oss-cn-shanghai.aliyuncs.com/img/ALL%20SURFACE08.jpeg',ind:'斯伯丁官方旗舰店高弹力空心胶球LOGO系列 51-173y',price:'￥ 25.00'} 
            ]
        }
    },
    methods: {
        autoPlay () {
            this.mark++;
            if (this.mark === 3) { //当遍历到最后一张图片置零
                this.mark = 0
            }
        },
        play () {
            setInterval(this.autoPlay, 2500)
        },
        change (i) {
            this.mark = i
        },
    },
    created() {
        this.play()
    },
    mounted() {

    },   
}
</script>

<style scoped>
    img {
        width: 100%;
        height: 10rem;
    }
    .home {
        width: 100%;
    }
    /* swipe */
    .slide {
        width: 100%;
        height: 10rem;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
    }
    .slideshow {
        width: 100%;
        height: 10rem;
    }
    li {
        position: absolute;
    }
    .bar {
        position: absolute;
        width: 100%;
        bottom: 10px;
        margin: 0 auto;
        z-index: 10;
        text-align: center;
    }
    .bar span {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: white;
        display: inline-block;
        margin-right: 10px;
    }
    .active {
        background: red !important;
    }
    /* midNav */
    .mid-nav {
        width:100%;
        height: 3.75rem;
        display: flex;
        margin: 1.5rem 0;
    }
    .mid-nav div {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .mid-nav div img {
        width: 2.75rem;
        height: 2.75rem;
    }
    .mid-nav div p {
        width: 100%;
        text-align: center;
    }
    /* hot-list */
    .hot-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 2.5rem;
        margin-top: .5rem;
    }
    .hot-pro {
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        box-shadow: 0 3px 1px #ccc;
    }
    .hot-list div {
        box-sizing: border-box;
        width: 50%;
        height: 15.625rem;
        border-bottom: 1px solid #ccc;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .hot-list div:nth-child(2n) {
        border-left: 1px solid #ccc;
    }
    .hot-list div img {
        width: 80%;
        height: 10rem;
        margin: 0 auto;
    }
    .hot-list div p {
        width: 80%;
        font-size: 14px;
    }
    .hot-list div span {
        font-weight: bold;
        padding-left: 4rem;
        line-height: 2rem;
    }
</style>