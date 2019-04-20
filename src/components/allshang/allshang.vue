<template>
  <div class="allbasket">
    <header>所有上衣</header>
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
  name: "allshang",
  data() {
    return {
      list: [
        {
          name: "运动休闲男子夹克长袖",
          price: "￥ 499.00",
          url:
            "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/shang01.jpeg"
        },
        {
          name: "篮球比赛套装经典系列背心 twcwx000132",
          price: "￥ 99.00",
          url:
            "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/shang02.jpeg"
        },
        {
          name: "篮球比赛套装经典系列背心 twcwx000162",
          price: "￥ 99.00",
          url:
            "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/shang03.jpeg"
        },
        {
          name: "篮球比赛套装经典系列背心 twcwx000172",
          price: "￥ 99.00",
          url:
            "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/shang04.jpeg"
        },
        {
          name: "篮球比赛套装经典系列篮球背心 twcwx000205",
          price: "￥ 99.00",
          url:
            "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/shang05.jpeg"
        },
        {
          name: "篮球比赛套装经典系列篮球背心 twcwx000225",
          price: "￥ 99.00",
          url:
            "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/shang06.jpeg"
        },
        {
          name: "篮球比赛套装经典系列篮球背心 twcwx000235",
          price: "￥ 99.00",
          url:
            "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/shang07.jpeg"
        },
        {
          name: "篮球比赛套装经典系列篮球背心 twcwx000275",
          price: "￥ 99.00",
          url:
            "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/shang08.jpeg"
        },
        {
          name: "男子运动训练夹克上衣 twtwx000335",
          price: "￥ 239.00",
          url:
            "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/shang09.jpeg"
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