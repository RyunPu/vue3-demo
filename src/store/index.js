import { createStore } from 'vuex'
import todos from './todos'

const mutations = {
  setState(state, [name, value]) {
    let moduleName = name.split('/')[0]
    let target = name.split('/')[1]

    if (moduleName) {
      if (target) {
        if (Object.prototype.toString.call(value) === '[object Object]') {
          state[moduleName][target] = Object.assign({}, value)
        } else {
          state[moduleName][target] = value
        }
      } else {
        state[moduleName] = value
      }
    }
  }
}

export default createStore({
  mutations,
  modules: {
    todos
  }
})
