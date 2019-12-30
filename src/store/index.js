import Vue from 'vue'
import Vuex from 'vuex'
import Doc from './doc'
import Video from './video'
import home from './home/home'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
   Doc,
   Video,
   home
  },

})

export default store
