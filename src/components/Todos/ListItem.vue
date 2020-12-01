<template>
  <li :class="{ completed: todo.completed, editing }">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="todo.completed"
        @change="onComplete"
      /><label @dblclick="editing = true">{{ todo.todo }}</label
      ><button class="destroy" @click="onRemove"></button>
    </div>
    <input
      v-if="editing"
      class="edit"
      :value="name"
      @change="onChange"
      @keyup="onSubmit"
    />
  </li>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const editing = ref(false)
    const name = ref(props.todo.todo)

    const onRemove = () => emit('remove', props.todo.id)
    const onComplete = () =>
      emit('update', { id: props.todo.id, completed: !props.todo.completed })
    const onChange = e => (name.value = e.target.value)
    const onSubmit = e => {
      if (e.key !== 'Enter') return
      emit('update', { id: props.todo.id, todo: name.value })
      editing.value = false
    }

    return {
      editing,
      name,
      onRemove,
      onComplete,
      onChange,
      onSubmit
    }
  }
}
</script>

<style lang="scss" scoped></style>
