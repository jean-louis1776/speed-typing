import { useCallback, useEffect, useRef, useState } from 'react'

const useCountdownTimer = (seconds: number) => {
  const [ timeLeft, setTimeLeft ] = useState(seconds)
  const intervalRef = useRef<NodeJS.Timer | null>(null)

  const startCountdown = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1)
    }, 1000)
  }, [ setTimeLeft ])

  const resetCountdown = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    setTimeLeft(seconds)
  }, [ seconds ])

  useEffect(() => {
    if (!timeLeft && intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }, [ timeLeft, intervalRef ])

  return { timeLeft, resetCountdown, startCountdown }
}

export default useCountdownTimer