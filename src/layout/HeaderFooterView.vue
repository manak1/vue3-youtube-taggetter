<template>
  <div
    class="w-full flex flex-col justify-center min-h-screen h-full bg-secondary"
  >
    <Header />
    <div class="flex-grow" />
    <main class="h-full">
      <div class="flex items-center justify-center h-full my-4">
        <Content>
          <slot />
        </Content>
      </div>
    </main>
    <div class="flex-grow" />
    <Footer />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import Header from '@/components/common/Header.vue'
  import Footer from '@/components/common/Footer.vue'
  import Content from '@/components/common/Content.vue'

  export default defineComponent({
    components: {
      Header,
      Footer,
      Content,
    },
    setup() {
      return {}
    },
  })
</script>

<style scoped></style>
