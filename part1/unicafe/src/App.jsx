import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = ({ text, value, isPercentage = false }) => {
  return (
    <p>{text} {value}{isPercentage ? ' %' : ''}</p>
  );
}

const Statistics = ({ good, neutral, bad, hasFeedback }) => {
  if (!hasFeedback) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }

  const total = good + neutral + bad;
  const average = (good + (neutral * 0) + (bad * -1)) / (total || 1);
  const positivePercentage = (good / total) * 100 || 0;

  return (
    <>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positivePercentage} isPercentage />
    </>
  );
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
