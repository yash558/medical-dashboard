import { useCallback } from "react"
import { useRef } from "react"
const useDebounce = (fn, delay) => {
  let timerRef = useRef(false)
  let callDuringResetRef = useRef(false)

  const debounce = useCallback(function (...args) {
    const callNow = !timerRef.current
    clearTimeout(timerRef.current)
    if (!callNow) {
      callDuringResetRef.current = true
    }
    timerRef.current = setTimeout(() => {
      timerRef.current = null
      if (callDuringResetRef.current) {
        callDuringResetRef.current = false
        fn(...args)
      }
    }, delay)

    if (callNow) {
      fn(...args)
    }
  }, [])

  return debounce
}

export default useDebounce
