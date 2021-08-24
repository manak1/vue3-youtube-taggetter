<template>
  <div class="container mx-auto text-center">
    <img alt="Vue logo" class="mx-auto" src="./assets/logo.png" />
    <h2 class="text-red-300">test</h2>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import HelloWorld from './components/HelloWorld.vue'

  export default defineComponent({
    name: 'App',
    components: {
      HelloWorld,
    },
  })
</script>
