<template>
  <transition name="fade" appear>
    <img :src="src" v-bind="$attrs" />
  </transition>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },
  inheritAttrs: false
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
