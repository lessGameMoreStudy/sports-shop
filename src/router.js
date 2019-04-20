import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/home/home.vue'
import List from './components/list/list.vue'
import Detail from './components/detail/detail.vue'
import User from './components/user/user.vue'
import ShopCar from './components/shopcar/shopcar.vue'
import Login from './components/login/login.vue'
import Reg from './components/reg/reg.vue'
import AllBasketball from './components/allbasket/allbasket.vue'
import AllFoot from './components/allfoot/allfoot.vue'
import AllShang from './components/allshang/allshang.vue'
import AllXia from './components/allxia/allxia.vue'
Vue.use(Router)

var routes = [
  {path:'/',redirect:'/home'},
  {path:'/home',component:Home},
  {path:'/list',component:List},
  {path:'/detail',component:Detail,name:'Detail'},
  {path:'/user',component:User},
  {path:'/shopcar',component:ShopCar},
  {path:'/login',component:Login},
  {path:'/reg',component:Reg},
  {path:'/allbasketball',component:AllBasketball},
  {path:'/allfoot',component:AllFoot},
  {path:'/allshang',component:AllShang},
  {path:'/allxia',component:AllXia},
  {path:'*',redirect:'/home'}
]
export default new Router({
  mode: 'hash',routes
})