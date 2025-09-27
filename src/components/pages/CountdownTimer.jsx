"use client"

import { useState, useEffect } from "react"

export function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  // Common styles for each card
  const cardClass =
    "flex flex-col items-center justify-center w-[98px] h-[122px] bg-white rounded-[10.67px] shadow-md text-black"

  return (
    <div className="flex gap-4 text-center font-semibold">
      {/* Days */}
      <div className={cardClass}>
        <span className="text-3xl md:text-4xl">{timeLeft.days || 0}</span>
        <span className="text-sm text-gray-500 mt-1">Days</span>
      </div>

      {/* Hours */}
      <div className={cardClass}>
        <span className="text-3xl md:text-4xl">{timeLeft.hours || 0}</span>
        <span className="text-sm text-gray-500 mt-1">Hours</span>
      </div>

      {/* Minutes */}
      <div className={cardClass}>
        <span className="text-3xl md:text-4xl">{timeLeft.minutes || 0}</span>
        <span className="text-sm text-gray-500 mt-1">Mins</span>
      </div>

      {/* Seconds */}
      <div className={cardClass}>
        <span className="text-3xl md:text-4xl">{timeLeft.seconds || 0}</span>
        <span className="text-sm text-gray-500 mt-1">Secs</span>
      </div>
    </div>
  )
}
