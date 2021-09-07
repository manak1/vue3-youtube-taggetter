<template>
  <div class="w-full">
    <label :for="name" class="text-sm font-bold text-gray-600">
      {{ label }}
    </label>
    <div class="relative">
      <input
        :value="modelValue"
        :name="name"
        :placeholder="placeholder"
        class="text-sm sm:text-base rounded border w-full py-2 px-2 mt-1"
        autocomplete="off"
        @input="onInput"
      />
      <img
        class="
          absolute
          w-3
          h-3
          sm:w-4 sm:h-4
          right-2
          sm:right-3
          top-4
          opacity-50
          cursor-pointer
        "
        src="@/assets/images/times.svg"
        alt="削除"
        tabindex="0"
        @click.prevent="onClear"
      />
    </div>
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
    emits: ['update:modelValue', 'clear'],
    setup(_, { emit }) {
      const onInput = (event: Event) => {
        const target = event.target as HTMLInputElement
        emit('update:modelValue', target.value)
      }
      const onClear = () => {
        emit('update:modelValue', '')
      }
      return {
        onInput,
        onClear,
      }
    },
  })
</script>
