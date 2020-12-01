export const storage = {
  setItem(name, value) {
    window.localStorage.setItem(name, JSON.stringify(value))
  },

  getItem(name, defaultValue = null) {
    const originalValue = window.localStorage.getItem(name)
    const value = originalValue === null ? defaultValue : originalValue

    try {
      return JSON.parse(value)
    } catch (e) {
      return value
    }
  },

  removeItem(name) {
    window.localStorage.removeItem(name)
  }
}

/**
 * 函数去抖
 * @param {function} fn - 需要去抖的函数
 * @param {number} delay - 延迟时间，单位：ms
 * @return {function} 封装后的去抖函数
 */
export function debounce(fn, delay = 500) {
  // 定时器
  let timer

  return function() {
    // 保存函数调用时的上下文和参数，用于传递给 fn
    const context = this
    const args = arguments

    // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
    clearTimeout(timer)

    // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
    // 再过 delay 毫秒就执行 fn
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}

/**
 * 函数节流
 * @param {function} fn - 需要节流的函数
 * @param {number} threshold - 执行间隔阈值，单位：ms
 * @return {function} 封装后的节流函数
 */
export function throttle(fn, threshold = 500) {
  // 定时器
  let timer
  // 记录上次执行的时间
  let last = +new Date()

  return function() {
    // 保存函数调用时的上下文和参数，用于传递给 fn
    const context = this
    const args = arguments
    // 记录函数的调用时间
    const now = +new Date()
    clearTimeout(timer)

    // 如果距离上次执行 fn 函数的时间小于 threshold，那么就放弃执行 fn，并重新计时
    if (now - last < threshold) {
      // 保证在当前时间区间结束后，再执行一次 fn
      timer = setTimeout(() => {
        last = now
        fn.apply(context, args)
      }, threshold)
    } else {
      // 在大于指定时间阈值后执行一次 fn
      last = now
      fn.apply(context, args)
    }
  }
}
