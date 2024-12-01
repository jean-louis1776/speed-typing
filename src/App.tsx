import { CountdownTimer, GeneratedWords, RestartButton, Results, UserTypings, WordsContainer } from './components'
import useEngine from './hooks/useEngine'
import { calculateAccuracyPercentage } from './utils/helpers'

const App = () => {
  const { state, words, timeLeft, typed, errors, restart, totalTyped } = useEngine()

  return (
    <>
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GeneratedWords words={words} />
        <UserTypings userInput={typed} words={words} className={'absolute inset-0'} />
      </WordsContainer>
      <RestartButton onRestart={restart} className={'mx-auto mt-10 text-slate-500'} />
      <Results
        state={state} errors={errors} accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped} className={'mt-10'}
      />
    </>
  )
}

export default App