import { createStore } from 'vuex'

export default createStore({
  state: {
    cats: []
  },
  getters: {
    getFavouriteCats(state) {
      return state.cats
    }
  },
  mutations: {
    SET_CAT(state, payload) {
      state.cats.push(payload)
    },
    REMOVE_CAT(state, payload) {
      state.cats = state.cats.filter(cat => cat.id !== payload.id)
    }
  },
  actions: {
    setCat({ commit }, payload) {
      commit('SET_CAT', payload)
    },
    removeCat({ commit }, payload) {
      commit('REMOVE_CAT', payload)
    }
  },
  modules: {
  }
})
