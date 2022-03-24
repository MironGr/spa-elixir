export const getRandomColor = (colors: string[]): string => {
  const index: number = Math.round(Math.random() * (colors.length - 1))
  return colors[index]
}