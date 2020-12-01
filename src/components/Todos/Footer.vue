<template>
  <footer class="footer box-content">
    <span class="todo-count"
      ><strong>{{ itemsLeft }}</strong
      ><span>{{ itemText }} Left</span></span
    >
    <ul class="filters">
      <li v-for="filterTitle in filterTitles" :key="filterTitle">
        <a
          href="./#"
          :class="{ selected: filterTitle === filter }"
          @click="onFilterSelect(filterTitle)"
        >
          {{ filterTitle }}
        </a>
      </li>
    </ul>
    <button
      v-if="completedCount"
      class="clear-completed"
      @click="onClearCompleted"
    >
      Clear completed
    </button>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const { state, getters, commit } = useStore()
    const filterTitles = ['all', 'active', 'completed']
    const filter = computed(() => state.todos.filter)
    const completedCount = computed(
      () => getters['todos/compeletedTodos'].length
    )
    const itemsLeft = computed(() => getters['todos/activeTodos'].length)
    const itemText = computed(() => (itemsLeft.value > 1 ? ' items' : ' item'))

    const onFilterSelect = filter =>
      commit('todos/setState', ['filter', filter])
    const onClearCompleted = () =>
      commit('todos/setState', ['todos', getters['todos/activeTodos']])

    return {
      filterTitles,
      filter,
      onFilterSelect,
      completedCount,
      itemsLeft,
      itemText,
      onClearCompleted
    }
  }
}
</script>

<style lang="scss" scoped></style>
