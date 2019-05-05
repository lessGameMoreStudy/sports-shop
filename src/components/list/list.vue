<template>
    <div class="list">
        <div class="list-nav">
            <ul>
                <li v-for="(item,index) in nav" :key="index" :class="actNum==index?'active':''" @click="check(index,item.type)">{{item.name}}</li>
            </ul>
        </div>
        <div class="list-detail">
            <router-link tag='div' :to="{name:'Detail',params:{url:item.img,ind:item.name,price:item.price,id:item.id}}" v-for="(item,index) in list" :key="index">
                <img :src='item.img' alt="">
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
            nav:[
                {name:'PU',type:'pu'},
                {name:'牛皮',type:'niupi'},
                {name:'NBA',type:'nba'},
                {name:'7号球',type:'seven'},
                {name:'6号球',type:'six'},
                {name:'1号球',type:'one'},
                {name:'下装',type:'xia'},
                {name:'上装',type:'shang'},
                {name:'足球',type:'football'},
                {name:'室内',type:'shinei'},
                {name:'室外',type:'shiwai'}
            ],
            list:[],
            actNum:0
        }
    },
    methods:{
        check(index,type){
            this.actNum = index;
            axios.get(
            'http://localhost:8070/list',
            {
                params:{
                    type:type
                }
            }
            ).then(
                (res)=>{
                    this.list = res.data;
                }
            )
            .catch(
                (err)=>{
                    console.log(err)
                }
            )
        }
    },
    created(){
        axios.get(
            'http://localhost:8070/list',
            {
                params:{
                    type:'pu'
                }
            }
        ).then(
            (res)=>{
                this.list = res.data;
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