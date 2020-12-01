import { throttle } from '@/utils'
import { ref } from 'vue'
import useEvent from './useEvent'

export default function useScroll(el) {
  let eventEl
  let scrollEl

  if (el) {
    eventEl = el
    scrollEl = el.value
  } else {
    eventEl = ref(window)
    scrollEl = document.documentElement
  }

  const scrollY = ref(null)
  const scrollX = ref(null)

  const handler = throttle(() => {
    scrollY.value = scrollEl.scrollTop
    scrollX.value = scrollEl.scrollLeft
  }, 300)

  const remove = useEvent(eventEl, 'scroll', handler)

  return {
    scrollX,
    scrollY,
    remove
  }
}
