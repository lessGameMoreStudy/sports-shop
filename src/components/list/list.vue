<template>
    <div class="list">
        <div class="list-nav">
            <ul>
                <li v-for="(item,index) in nav" :key="index" :class="actNum==index?'active':''" @click="check(index)">{{item}}</li>
            </ul>
        </div>
        <div class="list-detail">
            <router-link tag='div' :to="{name:'Detail',params:{url:item.url,ind:item.name,price:item.price}}" v-for="(item,index) in actList.list" :key="index">
                <img :src='item.url' alt="">
                <p>{{item.name}}</p>
                <span>{{item.price}}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'List',
    data(){
        return {
            nav:['PU','牛皮','NBA','7号球','6号球','1号球','下装','上装','足球','室内','室外'],
            allList:[],
            actList:[],
            actNum:0
        }
    },
    methods:{
        check(index){
            this.actNum = index;
            this.actList = this.allList[this.actNum]
        }
    },
    created(){
        axios.get('/data/list.json').then(
            (res)=>{
                this.allList = res.data;
                this.actList = res.data[this.actNum]
            }
        )
        .catch(
            (err)=>{
                console.log(err)
            }
        )
    }
}
</script>

<style scoped>
    /* list */
    .list {
        width: 100%;
        height: 100%;
    }
    /* list-nav */
    .list-nav {
        height: 100%;
        width: 5rem;
        position: fixed;
        top: 0;
        left: 0;
    }
    .list-nav ul li {
        width: 100%;
        height: 3.5rem;
        text-align: center;
        line-height: 3.5rem;
        background: #ddd;
        border-bottom: 1px solid white;
    }
    .list-nav ul li.active {
        background: white;
    }
    /* list-detail */
    .list-detail {
        width: 75%;
        margin-left: 5.5rem;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 2.5rem;
    }
    .list-detail div {
        width: 50%;
        height: 15.625rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
    }
    .list-detail div:nth-child(2n) {
        border-left: 1px solid #ccc;
    }
    .list-detail div img {
        width: 80%;
        height: 10rem;
    }
    .list-detail div p {
        width: 80%;
        height: 4rem;
        font-size: 12px;
    }
    .list-detail div span {
        font-weight: bold;
        padding-left: 3rem;
        line-height: 1.5rem;
    }

</style>