import { motion } from 'framer-motion'
import { formatPercentage } from '../utils/helpers'
import { State } from '../hooks/useEngine'

interface ResultsProps {
  state: State
  errors: number
  accuracyPercentage: number
  total: number
  className?: string
}

export const Results = ({ state, errors, accuracyPercentage, total, className }: ResultsProps) => {
  const initial = { opacity: 0 }
  const animate = { opacity: 1 }
  const duration = { duration: 0.3 }

  if (state !== 'finish') {
    return null
  }

  return (
    <motion.ul className={`flex flex-col items-center text-primary-400 space-y-3 ${className}`}>
      <motion.li initial={initial} animate={animate} transition={{ ...duration, delay: 0 }}
                 className="text-xl font-semibold">Results
      </motion.li>
      <motion.li initial={initial} animate={animate}
                 transition={{ ...duration, delay: 0.5 }}>Accuracy: {formatPercentage(accuracyPercentage)}</motion.li>
      <motion.li initial={initial} animate={animate} transition={{ ...duration, delay: 1 }}
                 className="text-red-400">Errors: {errors}</motion.li>
      <motion.li initial={initial} animate={animate} transition={{ ...duration, delay: 1.5 }}>Typed: {total}</motion.li>
    </motion.ul>
  )
}

