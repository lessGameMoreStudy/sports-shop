import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bFoot:false
  },
  mutations: {
    bFoot:(state,payload)=>state.bFoot=payload
  },
  actions: {
    bFoot:({commit},payload)=>(commit('bFoot',payload))
  },
  getters: {
    bFoot:(state)=>state.bFoot
  }
})
