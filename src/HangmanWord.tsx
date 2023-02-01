import styled from "styled-components"


type HangmanWordProps = {  
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}
export function HangmanWord({guessedLetters, wordToGuess, reveal = false}: HangmanWordProps) {
    return (
    <Wrapper>
        {wordToGuess.split("").map((letter, index) => (
        <WordsSpan key={index}>
            <span style={{visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden", 
            color: !guessedLetters.includes(letter) && reveal ? "red" : "black",}}>
            
            {letter}
            </span>
        </WordsSpan>
    ))}</Wrapper>
    )
    }

const Wrapper = styled.div`
    display: flex;
    gap: .25em;
    font-size: 6rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Courier New', Courier, monospace;
`

const WordsSpan = styled.span`
    border-bottom: .1em solid #620202;
`


