declare var window: any
declare var console: any

// If running in browser the console hijack will cause infinite loop scenarios otherwise
const isHosted = !!(window.ReactNativeWebView || window.Android)

/**
 * Replaces functions with identifying string: "function name()"".
 * With this they just vanish and it's a little confusing on the log
 */
export const jsonStringifyFunctionReplacer = (key, val) =>
  typeof val === 'function' ? 'f ' + val.name + '()' : val

/**
 * Stringifies and sends supplied payload to host via postMessage bus
 * @param {object} payload
 */
export const postEventToHost = (payload: any) => {
  try {
    const data = JSON.stringify(payload, jsonStringifyFunctionReplacer)
    // Cascade through the react Native -> Android -> iframe host reference
    ;(window.ReactNativeWebView || window.Android || window.parent).postMessage(
      data,
      '*'
    )
  } catch (error) {
    console.log('postEventToHost error', error, payload)
  }
}

/**
 * Intercepts and replays console events to host via postMessage bus
 */
export function initConsoleHiJack() {
  if (!isHosted) return
  ;['log', 'info', 'error'].forEach((key: string) => {
    const prev = console[key]
    console[key] = function(...args: any[]) {
      prev.apply(this, args) // So safari debug console still receives events
      if (args[0] === 'postEventToHost error') return // To prevent stack-overflow if error occurs in postEventToHost
      const type = 'console.' + key
      postEventToHost({ type, args })
    }
  })
}

/**
 * Hooks into window event stream, attempts to parse anything received as a JSON payload,
 * passing result to supplied callback function.
 * @param {function} hostEventHandler
 */
export const initEventListener = (hostEventHandler: any) => {
  if (typeof hostEventHandler === 'function') {
    window.addEventListener(
      'message',
      function(event: any) {
        try {
          const isString = typeof event.data === 'string'
          const data = isString ? JSON.parse(event.data) : event.data
          hostEventHandler(data)
        } catch (err) {
          console.log('Unable to process message', err, event)
        }
      },
      false
    )
  }
}

/**
 * Returns set of functions which map supplied args to postMessage bus for reassembly on host
 * @param {string[]} keys
 */
export const postWrapFunctions = (keys: string[]) =>
  keys.reduce(
    (acc: any, key: string) => ({
      ...acc,
      [key]: function(...args) {
        postEventToHost({ type: 'function', key, args })
      }
    }),
    {}
  )

export default {
  initConsoleHiJack,
  initEventListener,
  postEventToHost,
  postWrapFunctions
}
