import { useState, useEffect } from 'react'

const App = () => {
  const initialAnecdotes = [
    { text: 'If it hurts, do it more often.', votes: 0 },
    { text: 'Adding manpower to a late software project makes it later!', votes: 0 },
    { text: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0 },
    { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0 },
    { text: 'Premature optimization is the root of all evil.', votes: 0 },
    { text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0 },
    { text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes: 0 },
    { text: 'The only way to go fast, is to go well.', votes: 0 }
  ]

  const [anecdotes, setAnecdotes] = useState(initialAnecdotes)
  const [selected, setSelected] = useState(0)
  const [mostVotedIndex, setMostVotedIndex] = useState(0)

  useEffect(() => {
    // Find the index of the anecdote with the most votes
    const maxVotesIndex = anecdotes.reduce((maxIndex, current, index, array) => 
      current.votes > array[maxIndex].votes ? index : maxIndex, 0)
    setMostVotedIndex(maxVotesIndex)
  }, [anecdotes])

  const vote = () => {
    const updatedAnecdotes = [...anecdotes]
    updatedAnecdotes[selected].votes += 1
    setAnecdotes(updatedAnecdotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected].text}</p>
      <p>has {anecdotes[selected].votes} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>
        next anecdote
      </button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotedIndex].text}</p>
      <p>has {anecdotes[mostVotedIndex].votes} votes</p>
    </div>
  )
}

export default App
