<template>
  <label class="text-sm font-bold text-gray-600">{{ label }}</label>
  <div class="tagList border p-4 mt-1">
    <template v-if="tags">
      <ul v-if="!isTagsEmpty" class="flex flex-wrap gap-2 sm:gap-3">
        <li v-for="(tag, index) in tags" :key="index" class="inline-block">
          <Tag :title="tag" @onDelete="onDelete" />
        </li>
      </ul>
      <div v-if="isTagsEmpty">
        <p class="text-xs sm:text-base text-gray-400">
          タグが見つからなかったよ(´・ω・`)
        </p>
      </div>
    </template>
    <div v-else>
      <p class="text-xs sm:text-base text-gray-400">
        URLを入力してね(｀・ω・´)
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import Tag from '@/components/common/Tag.vue'

  export default defineComponent({
    components: {
      Tag,
    },
    props: {
      tags: {
        type: Array as PropType<string[]>,
        required: true,
      },
      label: {
        type: String as PropType<string>,
        default: '',
      },
    },
    emits: ['onDelete'],
    setup(props, { emit }) {
      const isTagsEmpty = computed(() => {
        return !!(props.tags && props.tags.length === 0)
      })

      const onDelete = (title: string) => {
        emit('onDelete', title)
      }

      return {
        onDelete,
        isTagsEmpty,
      }
    },
  })
</script>

<style scoped>
  .tagList {
    min-height: 120px;
  }
</style>
