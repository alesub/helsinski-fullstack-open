import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Stat = ({text, counter}) => {
  return (
    <p>{text}: {counter}</p>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good+neutral+bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <Stat text='good' counter={good} />
      <Stat text='neutral' counter={neutral} />
      <Stat text='bad' counter={bad} />
      <Stat text='all' counter={good+neutral+bad} />
      <Stat text='average' counter={(good-bad)/(good+neutral+bad)} />
      <Stat text='positive' counter={good/(good+neutral+bad)*100 + ' %'} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const giveGoodFeedback = () => {
    setGood(good + 1)
  }
  const giveNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }
  const giveBadFeedback = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={giveGoodFeedback}
        text='good'
      />
      <Button
        handleClick={giveNeutralFeedback}
        text='neutral'
      />
      <Button
        handleClick={giveBadFeedback}
        text='bad'
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
