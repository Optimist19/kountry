import { createStore } from 'vuex'
import axios from 'axios'
import { persistentDataPlugin } from './plugin';

export default createStore({
  state: {
    data: [],
    computedDataFromGetter: null
  },
  mutations: {
    setData(state, payload){
      state.data = payload
      // console.log(state.data, "state.data")
    }
  },
  actions: {
    async getDataActions(context){
      let arr = await axios.get("https://restcountries.com/v3.1/all")
      // console.log(arr)
      // console.log(arr.data)
      let arrData = arr.data
      context.commit('setData', arrData)
    }
  },
  getters: {
    getData(state){
      console.log(state, "state in store")
      return state.data;
    }
  },

  plugins: [persistentDataPlugin],
  modules: {
  }
})
