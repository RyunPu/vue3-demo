const state = {
  todos: [],
  filter: 'all'
}

const getters = {
  allCompleted(state) {
    return state.todos.length && state.todos.every(todo => todo.completed)
  },
  activeTodos(state) {
    return state.todos.filter(todo => !todo.completed)
  },
  compeletedTodos(state) {
    return state.todos.filter(todo => todo.completed)
  },
  filteredTodos(state, getters) {
    switch (state.filter) {
      case 'active':
        return getters.activeTodos
      case 'completed':
        return getters.compeletedTodos
      default:
        return state.todos
    }
  }
}

const mutations = {
  setState(state, [name, value]) {
    state[name] = value
  },
  onAdd(state, { todo }) {
    state.todos.push({ id: Date.now(), todo, completed: false })
  },
  onRemove(state, { id }) {
    state.todos = state.todos.filter(todo => todo.id !== id)
  },
  onUpdate(state, values) {
    state.todos = state.todos.map(todo =>
      todo.id === values.id ? { ...todo, ...values } : todo
    )
  },
  onCompleteAll(state, completed) {
    state.todos = state.todos.map(todo => ({
      ...todo,
      ...{ completed }
    }))
  }
}

const actions = {
  onCompleteAll({ getters, commit }) {
    commit('onCompleteAll', !getters.allCompleted)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
