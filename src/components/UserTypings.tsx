import { Caret } from './Caret'

interface UserTypingsProps {
  userInput: string
  className?: string
}

interface CharacterProps {
  char: string
}

export const UserTypings = ({ userInput, className }: UserTypingsProps) => {
  const typedCharacters = userInput.split('')

  return (
    <div className={className}>
      {typedCharacters.map((char, index) => (
        <Character key={`${char}_${index}`} char={char}/>
      ))}
      <Caret/>
    </div>
  )
}

const Character = ({ char }: CharacterProps) => {
  return <span className="text-primary-400">{char}</span>
}

