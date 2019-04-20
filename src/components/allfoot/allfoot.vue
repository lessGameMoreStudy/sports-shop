<template>
  <div class="allbasket">
    <header>所有足球</header>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <router-link :to="{name:'Detail',params:{url:item.url,ind:item.name,price:item.price}}">
          <img :src="item.url" alt>
        </router-link>
        <p>{{item.name}}</p>
        <span>{{item.price}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "allfoot",
  data() {
    return {
      list: [
        {
          name: "sc1系列棕/灰/黄色 5号机缝足球64-959y",
          price: "￥ 99.00",
          url:
            "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/SC1001.jpeg"
        },
        {
          name: "sc1 系列 白/绿/紫色 5号机缝足球64-958y",
          price: "￥ 99.00",
          url:
            "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/SC1002.jpeg"
        },
        {
          name: "sc1系列银/黑/橘色5号机缝足球64-957y",
          price: "￥ 99.00",
          url: "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/SC101.jpeg"
        },
        {
          name: "CLASSIC 2.0系列机缝足球64-953y",
          price: "￥ 89.00",
          url: "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/SC102.jpeg"
        },
        {
          name: "CLASSIC 2.0系列机缝足球64-950y",
          price: "￥ 89.00",
          url: "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/SC103.jpeg"
        },
        {
          name: "CLASSIC 2.0系列 机缝足球64-952y",
          price: "￥ 89.00",
          url:
            "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/fivefoot01.jpeg"
        },
        {
          name: "CLASSIC 2.0系列机缝足球64-951y",
          price: "￥ 89.00",
          url:
            "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/fivefoot02.jpeg"
        },
        {
          name: "SPALDING官方旗舰店ROOKIE GEAR青少年用球 83-317Y",
          price: "￥ 99.00",
          url:
            "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/fivefoot03.jpeg"
        }
      ]
    };
  }
};
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