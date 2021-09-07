<template>
  <HeaderFooterView>
    <h1 class="text-center">Youtube Tagゲッター(｀・ω・´)</h1>
    <form class="mt-5 space-y-4">
      <InputText
        v-model="form.url"
        name="url"
        label="URL"
        placeholder="YouTubeのURLを入力してね( ・∇・)"
      />
      <Button
        label="タグを検索する"
        :disabled="inProgress || isSameUrl"
        @click.prevent="searchTags"
      />
    </form>
    <div class="mt-4">
      <TagList label="タグ一覧" :tags="tags" @onDelete="onDeleteTag" />
    </div>
    <div class="mt-4">
      <Button
        :disabled="isTagsEmpty"
        label="コピーする"
        @click.prevent="copyText"
      />
    </div>
  </HeaderFooterView>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, computed } from 'vue'

  import InputText from '@/components/input/InputText.vue'
  import TagList from '@/components/common/TagList.vue'
  import Button from '@/components/button/Button.vue'
  import HeaderFooterView from '@/layout/HeaderFooterView.vue'

  import { clipboardCopyText } from './utils/clipboard'
  import { getYoutubeId } from './utils/youtube'
  import { sortByLength } from './utils/sort'

  import { useGetYoutubeTag } from './hooks/api/youtube'
  import { isNullOrUndefined } from './utils/isNullOrUndefined'

  export default defineComponent({
    name: 'App',
    components: {
      HeaderFooterView,
      InputText,
      TagList,
      Button,
    },
    setup() {
      const { fetch, inProgress } = useGetYoutubeTag()

      const lastFetchUrl = ref('')
      const tags = ref<string[] | null>(null)
      const form = reactive({
        url: '',
      })

      const copyText = async () => {
        if (!tags.value) return
        const copyText = tags.value.join(',')
        await clipboardCopyText(copyText).catch((error: Error) => {
          throw error
        })
        alert('タグがコピーされたよ！( ・∇・)')
      }

      const searchTags = async () => {
        const videoId = getYoutubeId(form.url)
        if (!videoId) {
          alert('YouTubeのURLを入力してね(´・ω・`)')
          return
        }

        const tagList = await fetch(videoId).catch((error) => {
          throw error
        })
        lastFetchUrl.value = form.url
        tags.value = sortByLength(tagList as string[])
      }

      const onDeleteTag = (title: string) => {
        if (!tags.value) return
        tags.value = tags.value.filter((tag) => {
          return tag !== title
        })
      }

      const isTagsEmpty = computed(() => {
        return isNullOrUndefined(tags.value)
          ? true
          : !!(tags.value && tags.value?.length === 0)
      })

      const isSameUrl = computed(() => {
        return form.url === lastFetchUrl.value
      })

      return {
        form,
        copyText,
        onDeleteTag,
        tags,
        isTagsEmpty,
        searchTags,
        inProgress,
        isSameUrl,
      }
    },
  })
</script>
