import React, { useState } from 'react'

const Button = ({ title, onClick }) => (
  <button onClick={onClick}>{title}</button>
)

const Header = ({ title }) => <h2>{title}</h2>

const MostVoted = ({ anecdotes, votes }) => {
  return votes.some((x) => x > 0) ? (
    <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
  ) : (
    `Anecdotes haven't voted yet.`
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients',
  ]

  let points = new Array(anecdotes.length + 1)
    .join('0')
    .split('')
    .map(parseFloat)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([...points])

  const handleNextAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const handlePoints = () => {
    let copy = votes
    copy[selected] = copy[selected] + 1
    setVotes([...copy])
  }

  return (
    <div>
      <Header title="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button title="vote" onClick={() => handlePoints()} />
      <Button title="next anecdote" onClick={() => handleNextAnecdote()} />
      <Header title="Anecdote with most votes" />
      <MostVoted anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App
