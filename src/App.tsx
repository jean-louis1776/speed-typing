import { faker } from '@faker-js/faker'
import { CountdownTimer, GeneratedWords, RestartButton, Results, UserTypings, WordsContainer } from './components'
import useEngine from './hooks/useEngine'

const words = faker.word.words(10)

const App = () => {
  const { state, words, timeLeft, typed } = useEngine()

  return (
    <>
      <CountdownTimer timeLeft={timeLeft}/>
      <WordsContainer>
        <GeneratedWords words={words}/>
        <UserTypings userInput={typed} className={'absolute inset-0'}/>
      </WordsContainer>
      <RestartButton onRestart={() => null} className={'mx-auto mt-10 text-slate-500'}/>
      <Results errors={10} accuracyPercentage={100} total={200} className={'mt-10'}/>
    </>
  )
}

export default App