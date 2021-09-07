export const sortByLength = (list: string[]): string[] => {
  return list.sort((a, b) => {
    return a.length - b.length
  })
}
