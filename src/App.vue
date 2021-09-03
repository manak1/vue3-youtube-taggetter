<template>
  <HeaderFooterView>
    <h1 class="text-center">Youtube Tagゲッター(｀・ω・´)</h1>
    <form class="mt-5">
      <InputText
        name="url"
        label="URL"
        placeholder="YouTubeのURLを入力してください。"
      />
    </form>
    <div class="mt-4">
      <TagList label="タグ一覧" :tags="tags" @onDelete="onDeleteTag" />
    </div>
    <div class="mt-12">
      <Button label="コピーする" @click="copyText" />
    </div>
  </HeaderFooterView>
</template>

<script lang="ts">
  const tagList = new Array(3).fill(null).map((_, index) => {
    return {
      title: `テスト${index}`,
      index,
    }
  })

  import { defineComponent, reactive, ref, onMounted } from 'vue'

  import InputText from '@/components/input/InputText.vue'
  import TagList from '@/components/common/TagList.vue'
  import HeaderFooterView from '@/layout/HeaderFooterView.vue'
  import Button from '@/components/button/Button.vue'

  import { clipboardCopyText } from '@/utils/clipboard.ts'

  import { Tag } from '../src/types/index'

  export default defineComponent({
    name: 'App',
    components: {
      HeaderFooterView,
      InputText,
      TagList,
      Button,
    },
    setup() {
      const tags = ref<Tag[]>([])
      const form = reactive({
        url: '',
      })

      onMounted(() => {
        tags.value = tagList
      })

      const copyText = async () => {
        await clipboardCopyText('テストだよ').catch((error: Error) => {
          throw error
        })
      }

      const onDeleteTag = (title: string) => {
        tags.value = tags.value.filter((tag) => {
          return tag.title !== title
        })
      }

      return {
        form,
        copyText,
        onDeleteTag,
        tags,
      }
    },
    data() {
      return {
        tagList,
      }
    },
  })
</script>
