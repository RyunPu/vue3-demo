<template>
  <section class="todoapp">
    <header class="header">
      <h1>Images</h1>
    </header>
  </section>
  <section>
    <div class="article-grid">
      <article class="article" v-for="(photo, i) in allPhotos" :key="i">
        <Image :src="photo.webformatURL" />
      </article>
    </div>
  </section>

  <div class="loading-box text-center p-4">
    <template v-if="loading">
      <Spinner />
    </template>
    <button v-else-if="page < 11" @click="getPhotos">
      Load more Images
    </button>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import Spinner from '@/components/Spinner'
import Image from '@/components/Image'
import useEndOfPage from '@/composables/useEndOfPage'
import usePromise from '@/composables/usePromise'

export default {
  components: {
    Spinner,
    Image
  },
  setup() {
    const page = ref(1)
    const allPhotos = ref([])
    const perpage = 10

    const { loading, result, use: getPhotos } = usePromise(async () => {
      const response = await fetch(
        `https://pixabay.com/api/?key=14551560-202ad086904416c08de2a423c&q=draw&page=${page.value}&per_page=${perpage}`
      )
      return response.json()
    })

    watch(result, result => {
      if (result) {
        const photos = result.hits
        if (photos.length) page.value += 1
        allPhotos.value = [...allPhotos.value, ...photos]
      }
    })

    const next = () => {
      if (!loading.value && page.value < 11) {
        getPhotos()
      }
    }

    useEndOfPage(next)

    return {
      allPhotos,
      loading,
      page,
      getPhotos
    }
  }
}
</script>

<style scoped>
.article-grid {
  column-count: 3;
  column-gap: 10px;
  column-fill: auto;
}

.article-grid article {
  margin-bottom: 10px;
}
</style>
