<template>
  <div class="w-full">
    <label :for="name" class="text-sm font-bold text-gray-600">
      {{ label }}
    </label>
    <input
      :modelValue="modelValue"
      :name="name"
      :placeholder="placeholder"
      class="rounded border w-full py-2 px-2 mt-1"
      @input="onInput($event.target.value)"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'

  export default defineComponent({
    name: 'InputText',
    props: {
      modelValue: {
        type: String as PropType<string>,
        required: true,
      },
      name: {
        type: String as PropType<string>,
        required: true,
      },
      label: {
        type: String as PropType<string>,
        default: '',
      },
      placeholder: {
        type: String as PropType<string>,
        required: true,
      },
    },
    emits: ['update:modelValue'],
    setup(_, { emit }) {
      const onInput = (value: string) => {
        emit('update:modelValue', value)
      }
      return {
        onInput,
      }
    },
  })
</script>
