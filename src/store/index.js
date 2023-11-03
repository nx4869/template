import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    axiosArr: [], // 储存cancel token
}

const mutations = {
    // 保存请求接口cancelToken 数据
    setAxiosArr(state, cancelAjax) {
        state.axiosArr.push(cancelAjax.cancelToken)
    },
    clearAxiosArr(state) {
        state.axiosArr.forEach(item => {
            item()
        })
        state.axiosArr = []
    },
}

export default new Vuex.Store({
    state,
    mutations
})
