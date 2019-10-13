export function getMinuteBySecond(second) {
  return `${parseInt(second/60)}:${second%60}`
}