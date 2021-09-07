/**
 * 受け取ったURLからyoutube動画のidを抜き取る
 * @param {url} URLの動画
 * @returns {id | ''} 動画のidまたは空の文字列
 */
export const getYoutubeId = (url: string): string => {
  console.log('check me', url)
  const youtubeIdregex =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\\?]*).*/
  const match = url.match(youtubeIdregex)
  console.log(match)
  if (match && match[7].length === 11) return match[7]
  return ''
}
