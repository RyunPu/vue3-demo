<template>
  <section class="todoapp">
    <header class="header">
      <h1>Posts</h1>
    </header>
  </section>
  <section>
    <div class="flex flex-col items-center text-left">
      <article v-for="(post, i) in allPosts" :key="i">
        <article
          class="post max-w-2xl border border-gray-200 rounded-sm shadow mb-4 p-3"
        >
          <h2 class="text-gray-700 font-bold fot-serif text-xl">
            {{ post.title }}
          </h2>
          <hr class="text-gray-600 mb-2" />
          <p class="text-xs text-gray-500 mb-3">by User {{ post.id }}</p>
          <p>
            {{ post.body }}
          </p>
        </article>
      </article>
    </div>
  </section>

  <div class="loading-box text-center p-4">
    <template v-if="loading">
      <Spinner />
    </template>
    <button v-else-if="start < 50" @click="getPosts">
      Load more Posts
    </button>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import Spinner from '@/components/Spinner'
import usePromise from '@/composables/usePromise'

export default {
  components: {
    Spinner
  },
  setup() {
    const start = ref(1)
    const allPosts = ref([])
    const perpage = 10

    const { loading, result, use: getPosts } = usePromise(async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${start.value -
          1}&_limit=${perpage}`
      )
      return response.json()
    })

    watch(result, result => {
      if (result) {
        if (result.length) start.value += perpage
        allPosts.value = [...allPosts.value, ...result]
      }
    })

    getPosts()

    return {
      allPosts,
      loading,
      start,
      getPosts
    }
  }
}
</script>

<style lang="scss" scoped></style>
