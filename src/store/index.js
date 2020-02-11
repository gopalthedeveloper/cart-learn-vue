import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js'
import * as mutations from './mutations'
import * as actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:{products:{},total:0,noItems:0},
  },
  getters,
  mutations,
  actions,
  modules: {
  }
})
