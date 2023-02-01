import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { Keyboard } from './Keyboard'
import words from "./wordsList.json"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    //--We want to get a random word---//
     return words[Math.floor(Math.random() * words.length)]
  })
    // console.log(wordToGuess);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])


  //--Here it is all the incorrect letters are the one where all the letters is not in the word to guess --//
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )
const isLoser = incorrectLetters.length >= 6 // Why 6 bec of the body parts 
//--We want to see if every single letter is included in the guest letters then we have won --//
const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter:string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) return

    //--We are going to add our letter to the end of the array --//
    setGuessedLetters(currentLetter => [...currentLetter, letter])
  }, [guessedLetters, isWinner, isLoser])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      //-- This /^[a-z]$/ means if it does not match anything between A to Z then just return --//
      //NOTE it is a regular expression
      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)

    }

    //--This is just hooking it up then in the retune it removes it appropriately --//
    document.addEventListener("keypress", handler)

    //--we want an event listener for when we are done using it, to remove it--//
    return () => {
      document.removeEventListener("keypress", handler)
    }

  }, [guessedLetters])

  return (
    <Wrapper>
      <TextDiv>
        {isWinner && "Winner Winner! Chicken dinner - Refresh to try your luck again"}
        {isLoser && "Sorry try again- Refresh to try your luck again"}
      </TextDiv>
      <HangmanDrawing numberOfGuess={incorrectLetters.length}/>
      <HangmanWord reveal={isLoser} guessedLetters ={guessedLetters} wordToGuess={wordToGuess}/>
      <div style={{alignSelf: "stretch"}}>
      {/* We don't want people to be able to keep playing once they win or lose so we add the disable */}
      <Keyboard disabled={isWinner || isLoser} activeLetters = {guessedLetters.filter(letter => wordToGuess.includes(letter))} 
    inactiveLetters={incorrectLetters}
    addGuessedLetter={addGuessedLetter}/>
      </div>
      
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  max-width: 800;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  align-items: center;
`
const TextDiv = styled.div`
  font-size: 2rem;
  text-align: center;
`