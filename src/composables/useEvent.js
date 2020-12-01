import { onMounted, onUnmounted, ref, unref } from 'vue'

export default function useEvent(el = ref(document), name, handler) {
  el = unref(el)
  const remove = () => el && el.removeEventListener(name, handler)

  onMounted(() => el && el.addEventListener(name, handler))
  onUnmounted(remove)

  return remove
}
