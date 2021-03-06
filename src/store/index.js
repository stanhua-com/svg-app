import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'

// import { routeContexts } from '@/router'

Vue.use(Vuex)

const ls = new SecureLS({ isCompression: false })

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [createPersistedState({
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
    }
  })],
  modules: {
  },
  state: {
    menuList: [],
    // routeContexts().sort((a, b) => a.sort - b.sort)
    userInfo: null
  },
  getters: {
  },
  mutations: {
    /**
     * 设置用户信息
     */
    SET_USER_INFO(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    /**
      * 用户信息
      */
    userInfo({ commit }) {
      commit('SET_USERINFO', {})
    }
  }

})
