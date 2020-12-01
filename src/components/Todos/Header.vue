<template>
  <header class="header">
    <h1>Todos</h1>
    <input
      :value="todo"
      @input="onChange"
      @keyup="onSubmit"
      class="new-todo"
      placeholder="What needs to be done?"
    />
  </header>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const { commit } = useStore()
    const todo = ref('')

    const onChange = e => (todo.value = e.target.value)
    const onSubmit = e => {
      if (e.key !== 'Enter' || todo.value === '') return
      commit('todos/onAdd', { todo: todo.value })
      todo.value = ''
    }

    return {
      todo,
      onChange,
      onSubmit
    }
  }
}
</script>

<style lang="scss" scoped></style>
