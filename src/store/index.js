import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [
      {
        title: '吃番',
        complete: false
      },
      {
        title: '睡觉',
        complete: true
      },
      {
        title: '敲代码',
        complete: false
      },
    ]
  },
  mutations: {
    //添加任务
    addTodo(state, payload) {
      state.list.push(payload)
    },
    // 删除任务
    delTodo(state, payload) {
      state.list.splice(payload, 1)
    },
    // 清除已完成
    clear(state, payload) {
      state.list = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
