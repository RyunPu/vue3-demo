<template>
  <section class="todoapp">
    <Header />
    <List />
    <Footer v-if="todosLength" />
  </section>
</template>

<script>
import { onMounted, watchEffect, computed } from 'vue'
import { useStore } from 'vuex'
import { storage } from '@/utils'
import Header from '@/components/Todos/Header.vue'
import List from '@/components/Todos/List.vue'
import Footer from '@/components/Todos/Footer.vue'

export default {
  components: { Header, List, Footer },
  setup() {
    const { state, commit } = useStore()
    const todosLength = computed(() => state['todos'].todos.length)

    onMounted(() => {
      commit('todos/setState', ['todos', storage.getItem('todos', [])])
      // commit('setState', ['todos/todos', storage.getItem('todos', [])])

      watchEffect(() => {
        storage.setItem('todos', state['todos'].todos)
      })
    })

    return {
      todosLength
    }
  }
}
</script>

<style></style>
