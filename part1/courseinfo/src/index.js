import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => <Part name={part.name} number={part.exercises} />)}
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.number}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  let total = 0

  parts.forEach(part => {
    total += part.exercises
  })

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
