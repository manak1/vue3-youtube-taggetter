<template>
  <div
    class="
      flex
      items-center
      rounded-full
      py-1
      px-2
      bg-gray-200
      inline-block
      cursor-pointer
    "
  >
    <p class="text-xs sm:text-base text-gray-700">{{ title }}</p>
    <a href="#" class="ml-1" @click.prevent="onDelete(title)">
      <img class="w-4 h-4" src="@/assets/images/close.svg" alt="削除" />
    </a>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  export default defineComponent({
    props: {
      title: {
        type: String as PropType<string>,
        required: true,
      },
    },
    emits: ['onDelete'],
    setup(_, { emit }) {
      const onDelete = (title: string) => {
        emit('onDelete', title)
      }
      return {
        onDelete,
      }
    },
  })
</script>

<style scoped></style>
