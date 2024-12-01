import { Caret } from './Caret'
import cn from 'classnames'

interface UserTypingsProps {
  userInput: string
  words: string
  className?: string
}

interface CharacterProps {
  actual: string
  expected: string
}

export const UserTypings = ({ userInput, words, className }: UserTypingsProps) => {
  const typedCharacters = userInput.split('')

  return (
    <div className={className}>
      {typedCharacters.map((char, index) => (
        <Character key={`${char}_${index}`} actual={char} expected={words[index]} />
      ))}
      <Caret />
    </div>
  )
}

const Character = ({ actual, expected }: CharacterProps) => {
  const isCorrect = actual === expected
  const isWhiteSpace = expected === ' '

  return (
    <span
      className={cn({
        'text-red-400': !isCorrect && !isWhiteSpace,
        'text-primary-400': isCorrect && !isWhiteSpace,
        'bg-red-400/50': !isCorrect && isWhiteSpace,
      })}
    >
      {expected}
    </span>
  )
}

