<template>
    <div class="login">
        <div class="back">
            <div onclick="window.history.go(-1)">&lt;</div>
        </div>
        <div class="login-tit">
            <img src="../../assets/img/login.png" alt="">
        </div>
        <div class="content">
            <div class="user">
                <p>用户名：</p>
                <input type="text" v-model="user">
            </div>
            <div class="pass">
                <p>密<i style="color:#d3c8a0;">户</i>码：</p>
                <input type="password" v-model="pass">
            </div>
            <div class="log-reg">
                <div class="lon-in">
                    <button @click="login">登录</button>
                </div>
                <div class="reg">
                    <p>还没账号？<router-link tag='span' to='/reg' style="color:red;">立即注册</router-link></p>
                </div>
            </div>
        </div>
    </div>  
</template>
<script>
import axios from  'axios'
export default {
    name:'Login',
    data() {
        return {
            user:'',
            pass:''
        }
    },
    methods: {
        login(){
            var storage = window.localStorage;
            axios.post('http://120.77.170.183/api/login/',{
                account:this.user,
                password:this.pass                
            }).then(
                (res)=>{
                    if(res.data.err){
                        alert('账号密码错误')
                        this.pass = ''
                    }
                    else{
                        storage['user'] = res.data.data[0].account
                        this.$router.push({path:'/user'})
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
    .login {
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
    .login-tit {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #02295c;
        height: 4rem;
    }
    .login-tit img {
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