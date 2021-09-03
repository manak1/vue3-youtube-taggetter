<template>
  <label class="text-sm font-bold text-gray-600">{{ label }}</label>
  <div class="tagList border p-4 mt-1">
    <ul v-if="!isTagsEmpty" class="flex space-x-2">
      <li v-for="(tag, index) in tags" :key="index" class="inline-block">
        <Tag :title="tag.title" :index="index" @onDelete="onDelete" />
      </li>
    </ul>
    <div v-if="isTagsEmpty">
      <p class="text-gray-400 text-center">
        現在表示できるタグはないよ(´・ω・`)
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  import Tag from '@/components/common/Tag.vue'

  import { Tag as TagType } from '../../types/index'

  export default defineComponent({
    components: {
      Tag,
    },
    props: {
      tags: {
        type: Array as PropType<TagType[]>,
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
