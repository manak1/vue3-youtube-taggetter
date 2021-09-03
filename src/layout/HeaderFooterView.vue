<template>
  <div class="w-full flex flex-col justify-center h-screen bg-secondary">
    <Header />
    <main class="flex-grow h-full">
      <div class="flex items-center justify-center h-full">
        <Content>
          <slot />
        </Content>
      </div>
    </main>
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
