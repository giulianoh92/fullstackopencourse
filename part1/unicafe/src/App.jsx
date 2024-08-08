import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({ good, neutral, bad, hasFeedback }) => {
  if (!hasFeedback) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good + (neutral * 0) + (bad * -1)) / (good + neutral + bad || 1)}</p>
      <p>positive {((good / (good + neutral + bad)) * 100) || 0} %</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [hasClicked, setHasClicked] = useState(false)

  const handleGoodClick = () => {
    setGood(good + 1)
    setHasClicked(true)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setHasClicked(true)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setHasClicked(true)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} hasFeedback={hasClicked} />
    </div>
  )
}

export default App
