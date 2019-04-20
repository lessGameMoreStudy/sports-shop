<template>
    <div class="reg">
        <div class="back">
            <div onclick="window.history.go(-1)">&lt;</div>
        </div>
        <div class="reg-tit">
            <img src="../../assets/img/regTitle.png" alt="">
        </div>
        <div class="content">
            <div class="user">
                <p>用户名：</p>
                <input type="text" v-model="username">
            </div>
            <div class="pass">
                <p>密<i style="color:#d3c8a0;">户</i>码：</p>
                <input type="password" v-model="password">
            </div>
            <div class="log-reg">
                <div class="lon-in">
                    <button @click="reg">注册</button>
                </div>
                <div class="reg">
                    <p>已有账号？<router-link tag='span' to='/login' style="color:red;">立即登录</router-link></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:'Reg',
    data() {
        return {
            username:'',
            password:''
        }
    },
    methods: {
        reg(){
            axios.post('http://120.77.170.183/api/register/',{
                account:this.username,
                password:this.password
            }).then(
                (res)=>{
                    if(res.data.data == 'error'){
                        alert('用户名已存在')
                        this.username = ''
                        this.password = ''
                    }
                    else{
                        alert('注册成功')
                        this.$router.push({path:'/login'})
                    }
                }
            ).catch(
                (err)=>{
                    console.log(err)
                }
            )
        }
    },
}
</script>
<style scoped>
    .reg {
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
    .reg-tit {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #d3c8a0;
        height: 4rem;
    }
    .reg-tit img {
        height: 1.5rem;
    }
    .content {
        background: #d3c8a0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .user {
        display: flex;
        margin: 1.25rem 0;
    }
    .user input {
        border: none;
        background: white;
    }
    .pass {
        display: flex;
        margin: 1.25rem 0;
    }
    .pass input {
        border: none;
        background: white;
    }
    .log-reg button {
        border: none;
        width: 9.5rem;
        height: 2.5rem;
        font-size: 1.2rem;
        border-radius: 15px;
    }
    .log-reg>div {
        margin: 1.875rem;
    }
</style>