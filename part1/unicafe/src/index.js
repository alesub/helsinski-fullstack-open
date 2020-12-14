import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Rating = ({text, counter}) => {
  return (
    <p>{text}: {counter}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const giveGoodFeedback = () => setGood(good + 1)
  const giveNeutralFeedback = () => setNeutral(neutral + 1)
  const giveBadFeedback = () => setBad(bad + 1)

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

      <h1>statistics</h1>
      <Rating text='good' counter={good} />
      <Rating text='neutral' counter={neutral} />
      <Rating text='bad' counter={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
