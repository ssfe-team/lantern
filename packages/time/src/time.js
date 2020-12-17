/**
 * @param {Number} num 数值
 * @returns {String} 处理后的字符串
 * @description 如果传入的数值小于10，即位数只有1位，则在前面补充0
 */
const getHandledValue = num => {
  return num < 10 ? '0' + num : num
}
/**
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} currentTime 当前时间时间戳
 * @returns {Boolean} 传入的时间戳是否早于当前时间戳
 */
// const isEarly = (timeStamp, currentTime) => {
//   return timeStamp <= currentTime
// }
/**
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} currentTime 当前时间时间戳
 * @returns {Boolean} 传入的时间戳是否早于当前时间戳
 */
const isCurrent = (timeStamp, currentTime) => {
  return (new Date(currentTime)).getFullYear() === (new Date(timeStamp)).getFullYear()
}
/**
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} startType 要返回的时间字符串的格式类型，
 * 传入'year'则返回年月日,传入'noYear'则返回月日,不传则返回完整的年月日
 */
const getDate = (timeStamp, startType) => {
  const d = new Date(timeStamp)
  const year = d.getFullYear()
  const month = getHandledValue(d.getMonth() + 1)
  const date = getHandledValue(d.getDate())
  const hours = getHandledValue(d.getHours())
  const minutes = getHandledValue(d.getMinutes())
  const second = getHandledValue(d.getSeconds())
  let resStr = ''
  // 暂时只考虑三种情况 其他的在加
  if (startType === 'year') {
    resStr = year + '-' + month + '-' + date
  } else if (startType === 'noYear') {
    resStr = month + '-' + date
  } else {
    resStr = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + second
  }
  return resStr
}
export const getRelativeTime = (timeStamp, days) => {
  // 获取当前的时间戳
  const currentTime = (new Date()).getTime()
  let MaxDaysTime = 2623860000
  if (days) {
    MaxDaysTime = 86400000 * days
  }
  // 判断是否再当前年
  const IS_CURRENT = isCurrent(timeStamp, currentTime)

  // 判断传入时间戳是否早于当前时间戳
  // const IS_EARLY = isEarly(timeStamp, currentTime)

  // 获取两个时间戳差值
  let diff = currentTime - timeStamp
  let timeStr = ''

  if (diff < 1000) {
    timeStr = '刚刚'
  } else if (diff < 60000) {
    // 少于等于59秒
    timeStr = parseInt(diff / 1000) + '秒前'
  } else if (diff >= 60000 && diff < 3600000) {
    // 多于59秒，少于等于59分钟59秒
    timeStr = Math.floor(diff / 60000) + '分钟前'
  } else if (diff >= 3600000 && diff < 86400000) {
    // 多于59分钟59秒，少于等于23小时59分钟59秒
    timeStr = Math.floor(diff / 3600000) + '小时前'
  } else if (diff >= 86400000 && diff < MaxDaysTime) {
    // 多于23小时59分钟59秒，少于等于{默认是29天59分钟59秒，如果是有限制的话就是86400000 * days
    timeStr = Math.floor(diff / 86400000) + '天前'
  } else if (diff >= MaxDaysTime && diff <= 31567860000) {
    // 多于{默认是29天59分钟59秒，如果是有限制的话就是86400000 * days}，
    // 少于364天23小时59分钟59秒，且传入的时间戳早于当前
    if (IS_CURRENT) {
      timeStr = getDate(timeStamp, 'noYear')
    } else {
      timeStr = getDate(timeStamp, 'year')
    }
  } else {
    timeStr = getDate(timeStamp, 'year')
  }
  return timeStr
}
export default function(timestamp, days) {
  return getRelativeTime(timestamp, days)
}
