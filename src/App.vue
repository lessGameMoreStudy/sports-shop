<template>
  <div id="app">
    <router-view></router-view>
    <FootBar v-show="bFoot"></FootBar>
  </div>
</template>

<script>
import FootBar from './components/foot/foot'
import { mapGetters } from 'vuex'

export default {

  components:{
    FootBar
  },
  data() {
    return {

    }
  },
  methods:{
    checkRouterChange(to){
        // console.log('变化了',to)
        let path=to.path;

        if(/home|list|user|shopcar|allbasketball|allfoot|allshang|allxia/.test(path)){//home|follow|column
          this.$store.dispatch('bFoot',true)
        }
        if(/login|reg|detail/.test(path)){//login|reg|detail
          this.$store.dispatch('bFoot',false)
        }
        // if(/user/.test(path)){//user
        //   this.$store.dispatch('bFoot',true)
        // }
    }
  },
  watch:{
      $route:{
        deep:true,
        immediate:true,
        handler:'checkRouterChange'
      }
  },
  computed:mapGetters([
    'bFoot'
  ])
}
</script>

<style>

img ,a ,ul ,li ,div ,ol ,h1 ,h2 ,h3 ,h4 ,h5 ,h6 ,p ,span ,dl ,dt ,dd ,table ,tr ,td ,th ,thead ,tbody ,html ,body {margin: 0;padding: 0;}
ul li {list-style: none;}
a {text-decoration: none;color: #333;}
img {display: block;}
html , body {
  width: 100%;
  height: 100%;
}
</style>
