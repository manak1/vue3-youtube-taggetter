<template>
  <button
    class="inline-block py-3 w-full hover:opacity-75"
    :class="disabledClass"
    :disabled="disabled"
  >
    <p class="font-bold text-white">
      {{ label }}
    </p>
  </button>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'

  export default defineComponent({
    props: {
      label: {
        type: String as PropType<string>,
        required: true,
      },
      disabled: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
    },
    setup(props) {
      const disabledClass = computed(() =>
        props.disabled ? 'pointer-none bg-gray-300' : 'bg-purple-500'
      )
      return {
        disabledClass,
      }
    },
  })
</script>

<style scoped></style>
