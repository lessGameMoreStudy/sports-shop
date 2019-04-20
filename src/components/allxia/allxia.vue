<template>
  <div class="allbasket">
    <header>所有下装</header>
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
  name: "allxia",
  data() {
    return {
      list: [
        {
          name: "篮球比赛服套装精英系列短裤",
          price: "￥ 189.00",
          url: "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/xia01.jpeg"
        },
        {
          name: "篮球比赛服套装精英系列短裤",
          price: "￥ 189.00",
          url: "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/xia02.jpeg"
        },
        {
          name: "运动休闲男子长裤 stswx101015",
          price: "￥ 269.00",
          url: "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/xia03.jpeg"
        },
        {
          name: "运动休闲男子长裤 stswx101075",
          price: "￥ 269.00",
          url: "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/xia04.jpeg"
        },
        {
          name: "篮球比赛套装经典系列篮球短裤 twcwx100132",
          price: "￥ 99.00",
          url: "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/xia05.jpeg"
        },
        {
          name: "篮球比赛套装经典系列篮球短裤 twcwx100162",
          price: "￥ 99.00",
          url: "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/xia06.jpeg"
        },
        {
          name: "篮球比赛套装经典系列篮球短裤 twcwx100172",
          price: "￥ 99.00",
          url: "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/xia07.jpeg"
        },
        {
          name: "篮球比赛套装经典系列篮球短裤 twcwx100205",
          price: "￥ 99.00",
          url: "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/xia08.jpeg"
        },
        {
          name: "篮球比赛套装经典系列篮球短裤 twcwx100225",
          price: "￥ 99.00",
          url: "https://sports-shop.oss-cn-shanghai.aliyuncs.com/img/xia09.jpeg"
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