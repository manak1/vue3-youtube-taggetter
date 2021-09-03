/**
 * 受け取った文字列をクリップボードにコピーする。
 * @param {text} コピーしたいテキスト。
 */
export const clipboardCopyText = async (text: string): Promise<void> => {
  await navigator.clipboard.writeText(text).catch((error) => {
    throw error
  })
}
