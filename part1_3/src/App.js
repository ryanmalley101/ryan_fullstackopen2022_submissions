import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

    const randomItem = () => {
        var index = Math.floor(Math.random()*anecdotes.length);
        setSelected(index)
    }

    const vote = () => {
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
        console.log(points.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0))

    }

    var [points, setPoints] = useState(Array(anecdotes.length).fill(0))

    const [selected, setSelected] = useState(0)

  return (
      <div>
        <h1>Anecdote of the Day</h1>
        {anecdotes[selected]}
        <br></br>
        <p>has {points[selected]} votes</p>
        <Button text={"Vote"} handleClick={vote}/>
        <Button text={"next anecdote"} handleClick={randomItem}/>
        <h1>Anecdote with the most votes</h1>
        {anecdotes[points.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)]}
      </div>
  )
}

export default App