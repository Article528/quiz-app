import QuestionsData from "../data/QuestionsData"
import React, { useContext } from 'react'
import { DataContext } from "../App"

const Score = () => {
  const {score, setAppState, setScore} = useContext(DataContext)
    
  const restartQuiz = () => {
    setScore(0);
    setAppState("menu");
  }
  
    return (
    <div className='score'>
        <h1>Score Component</h1>
        <h2>{score} / {QuestionsData.length}</h2>
        <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default Score
