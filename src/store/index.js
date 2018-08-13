import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import permission from './permission'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    permission
  },
  getters
})

export default store
