<template>
    <div class="user">
        <header>
            个人中心
        </header>
        <div class="user-info">
            <div class="touxiang">
                <img src="../../assets/img/user.png" alt="">
            </div>
            <div class="user-name">
                <p>{{username}}</p>
            </div>
            <div class="log-out">
                <router-link tag='p' to='/login'>{{state}}</router-link>
            </div>
        </div>
        <div class="has-buy-tit">
            <p>历史订单</p>
        </div>
        <div class="has-buy">
            <div class="has-buy-pic">
                <img src="https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/NBA01.jpeg" alt="">
            </div>
            <div class="has-buy-info">
                <p>Highlight红/白/蓝色星形PU篮球76-022Y</p>
                <div class="has-buy-price">
                    <p>￥ 249.00</p>
                </div>
            </div>
        </div>
        <div class="has-buy">
            <div class="has-buy-pic">
                <img src="https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/NBA01.jpeg" alt="">
            </div>
            <div class="has-buy-info">
                <p>Highlight红/白/蓝色星形PU篮球76-022Y</p>
                <div class="has-buy-price">
                    <p>￥ 249.00</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'user',
    data() {
        return {
            username:'未登录',
            state:'退出登录'
        }
    },
    created() {
        this.username = window.localStorage.getItem('user') || '未登录'
        if(this.username == '未登录'){
            this.state = '去登陆'
        }
    },
}
</script>

<style scoped>
    .user {
        width: 100%;
    }
    header {
        width: 100%;
        height: 2.5rem;
        background: #1298db;
        color: white;
        text-align: center;
        line-height: 2.5rem;
    }
    .user-info {
        width: 100%;
        display: flex;
        padding-top: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 8px solid #ccc;
    }
    .touxiang {
        margin: 0 1.5rem;
    }
    .user-name {
        line-height: 2.5rem;
    }
    .log-out {
        line-height: 2.5rem;
        color: red;
        font-size: 12px;
        padding-left: 8rem;
    }
    .has-buy {
        width: 90%;
        display: flex;
        align-items: center;
        box-shadow: 0 4px 1px #ccc;
        border-radius: 5px;
        margin: 10px auto;
    }
    .has-buy-pic img {
        width: 6.25rem;
        height: 6.25rem;
    }
    .has-buy-info {
        font-size: 14px;
    }
    .has-buy-price {
        font-weight: bold;
        margin-top: .625rem;
        text-align: right;
        padding-right: 10px;
    }
    .has-buy-tit {
        width: 100%;
        height: 2.5rem;
        text-align: center;
        line-height: 2.5rem;
        color: #777;
        border-bottom: 1px solid #ccc;
    }
</style>