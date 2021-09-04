import { Ref, ref } from 'vue'
import axios from 'axios'
import config from '../../assets/script/config'

const client = axios.create({
  baseURL: `${config.youtubeBaseUrl}`,
  params: {
    key: config.youtubeApiKey,
  },
})

export const useGetYoutubeTag = (): {
  fetch: (videoId: string) => Promise<string[] | void>
  inProgress: Ref<boolean>
} => {
  const inProgress = ref(false)

  const fetch = async (videoId: string): Promise<string[] | void> => {
    if (inProgress.value) return
    inProgress.value = true
    const res = await client
      .get(`/videos?fields=items(snippet(tags))&part=snippet&id=${videoId}`)
      .catch((error) => {
        throw error
      })
      .finally(() => {
        inProgress.value = false
      })
    return res.data.items[0].snippet.tags
  }
  return {
    fetch,
    inProgress,
  }
}
