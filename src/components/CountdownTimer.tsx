import React from 'react'

interface CountdownTimerProps {
  timeLeft: number
}

export const CountdownTimer = ({ timeLeft }: CountdownTimerProps) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>
}

