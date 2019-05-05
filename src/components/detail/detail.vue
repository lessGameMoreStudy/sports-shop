<template>
    <div class="detail">
        <div class="back">
            <div onclick="window.history.go(-1)">&lt;</div>
        </div>
        <div class="pic-show">
            <img :src="this.$route.params.url" alt="">
        </div>
        <div class="price">
            <p><span>{{this.$route.params.price}}</span></p>
        </div>
        <div class="interduce">
            <p>{{this.$route.params.ind}}</p>
        </div>
        <div class="fahuo">
            <p>发货</p>
            <img src="../../assets/img/position.png" alt="">
            <p>中国上海</p>
            <p>快递：0.00</p>
            <span>月销3w+笔</span>
        </div>
        <div class="shop-it">
            <div class="dian">
                <img src="../../assets/img/dianpu.png" alt="">
                <p>店铺</p>
            </div>
            <div class="kefu">
                <img src="../../assets/img/kefu.png" alt="">
                <p>客服</p>
            </div>
            <div class="to-shopcar">
                <button @click="addCart">加入购物车</button>
            </div>
            <div class="shop-immediately">
                <button>立即购买</button>
            </div>
        </div>
        <div class="jianjie">
            <img src="../../assets/img/balltitle4.jpg" alt="">
            <img src="../../assets/img/ball-size.jpg" alt="">
            <img src="../../assets/img/balltitle5.jpg" alt="">
            <img src="../../assets/img/ball-maintain.jpg" alt="">
            <img src="../../assets/img/title7.jpg" alt="">
            <img src="../../assets/img/service-1.jpg" alt="">
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'Detail',
    data(){
        return {
            user:''
        }
    },
    mounted(){
        window.scrollTo(0,0)
       this.user = window.localStorage.getItem('userId')
    },
    methods:{
        addCart(){
            axios.get(
                'http://localhost:8070/addCart',
                {
                    params:{
                        goodsId:this.$route.params.id,
                        userId:this.user
                    }
                }
            ).then(
                (res)=>{
                    console.log(res)
                }
            ).catch(
                err=>console.log(err)
            )
        }
    }
}
</script>

<style scoped>
    .detail {
        width: 100%;
    }
    .back {
        height: 2rem;
        padding: .625rem;
    }
    .back div {
        width: 1.25rem;
        height: 1.25rem;
        background: #ddd;
        color: white;
        border-radius: 50%;
        text-align: center;
        line-height: 1.25rem;
    }
    .pic-show {
        width: 100%;
        height: 18.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .pic-show img {
        width: 80%;
        height: 80%;
    }
    .price {
        width: 100%;
    }
    .price p {
        width: 80%;
        padding-left: 1.875rem;
    }
    .price p span {
        color: red;
    }
    .interduce {
        width: 100%;
        padding: .625rem 1.25rem;
        box-sizing: border-box;
        margin-top:1rem;
        box-shadow: 0 2px 5px #ccc;
    }
    .interduce p {
        width: 90%;
        font-weight: 700;
    }
    .shop-it {
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        padding-right: 1.25rem;
        box-sizing: border-box;
        background: white;
        z-index: 1002;
    }
    .dian {
        width: 5rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
    }
    .shop-it img {
        width: 1rem;
        height: 1rem;
    }
    .kefu {
        justify-content: flex-end;
        flex-direction: column;
        width: 5rem;
        height: 3rem;
        display: flex;
        align-items: center;
        margin-right: 2rem;
    }
    .shop-it button {
        width: 5rem;
        height: 40px;
        border: none;
        color: white;
    }
    .to-shopcar button {
        background: orangered;
    }
    .shop-immediately button {
        background: red;
    }
    .jianjie {
        width: 100%;
        margin-bottom: 3rem;
    }
    .jianjie img {
        width: 100%;
    }
    .fahuo {
        width: 100%;
        height: 2rem;
        display: flex;
        font-size: 12px;
        align-items: center;
        margin-top: 8rem;
        margin-bottom: 2rem;
    }
    .fahuo p:nth-child(1) {
        padding-left: 0.7rem;
        padding-right: 1rem;
    }
    .fahuo p:nth-child(3) {
        padding-right: 2rem;
    }
    .fahuo p:nth-child(4) {
        padding-right: 5rem;
    }
    .fahuo img {
        width: 1rem;
        height: 1rem;
        padding-right: .2rem;
    }
</style>