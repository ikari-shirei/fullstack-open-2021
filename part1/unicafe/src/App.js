import React, { useState } from 'react'

const Header = ({ title }) => <h2>{title}</h2>

const Button = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>
}

const StatisticLine = ({ title, value }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return good !== 0 || neutral !== 0 || bad !== 0 ? (
    <table>
      <tbody>
        <StatisticLine title="good" value={good} />
        <StatisticLine title="neutral" value={neutral} />
        <StatisticLine title="bad" value={bad} />
        <StatisticLine title="all" value={all} />
        <StatisticLine title="average" value={average} />
        <StatisticLine title="positive" value={positive + '%'} />
      </tbody>
    </table>
  ) : (
    <p>No feedback given</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = ((bad * -1 + good) / all).toFixed(2)
  const positive = ((good / all) * 100).toFixed(2)

  const buttonHandler = (selected) => {
    if (selected === 'good') {
      setGood(good + 1)
    } else if (selected === 'neutral') {
      setNeutral(neutral + 1)
    } else if (selected === 'bad') {
      setBad(bad + 1)
    }
  }

  return (
    <>
      <Header title="give feedback" />
      <Button title="Good" onClick={() => buttonHandler('good')} />
      <Button title="Neutral" onClick={() => buttonHandler('neutral')} />
      <Button title="Bad" onClick={() => buttonHandler('bad')} />
      <Header title="statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </>
  )
}

export default App
