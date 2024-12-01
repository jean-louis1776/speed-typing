import { ReactNode } from 'react'

interface WordsContainerProps {
  children: ReactNode;
}

export const WordsContainer = ({ children }: WordsContainerProps) => {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3">
      {children}
    </div>
  )
}