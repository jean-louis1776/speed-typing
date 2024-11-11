import React from 'react'

interface GeneratedWordsProps {
  words: string
}

export const GeneratedWords = ({ words }: GeneratedWordsProps) => {
  return <div className="text-slate-500">
    {words}
  </div>
}
