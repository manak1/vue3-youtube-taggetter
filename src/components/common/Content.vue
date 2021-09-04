<template>
  <div class="w-full px-2">
    <div
      class="
        w-full
        sm:w-3/5
        px-6
        pt-6
        pb-10
        mx-auto
        rounded-md
        bg-white
        shadow
        content
      "
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({})
</script>

<style scoped>
  .content {
    max-width: 640px;
  }
</style>
