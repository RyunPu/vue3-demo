<template>
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      readonly=""
      @click="onCompleteAll"
    /><label for="toggle-all"></label>
    <ul class="todo-list">
      <ListItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="onRemove"
        @update="onUpdate"
      />
    </ul>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ListItem from '@/components/Todos/ListItem.vue'

export default {
  components: { ListItem },
  setup() {
    const { getters, commit, dispatch } = useStore()
    const todos = computed(() => getters['todos/filteredTodos'])

    const onRemove = id => commit('todos/onRemove', { id })
    const onUpdate = todo => commit('todos/onUpdate', todo)
    const onCompleteAll = () => dispatch('todos/onCompleteAll')

    return {
      todos,
      onRemove,
      onUpdate,
      onCompleteAll
    }
  }
}
</script>

<style lang="scss" scoped></style>
