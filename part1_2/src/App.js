import { useState } from 'react'

const Header = (props) => {
  return (
      <div>
        <h1>{props.text}</h1>
      </div>
  )
}

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)


const StatisticLine = (props) => {
  return (
      <tr>
          <td>{props.label}</td>
          <td>{props.value}</td>
      </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    const average = all/3
    const positive = `${(good/all) * 100}%`
    if (all > 0) {
        return (
            <div>
                <Header text={"statistics"}/>
                <table>
                    <tbody>
                        <StatisticLine label={"good"} value={good} />
                        <StatisticLine label={"neutral"} value={neutral}/>
                        <StatisticLine label={"bad"} value={bad}/>
                        <StatisticLine label={"all"} value={all}/>
                        <StatisticLine label={"average"} value={average}/>
                        <StatisticLine label={"positive"} value={positive}/>
                    </tbody>
                </table>

            </div>
        )
    }
    else {
        return (
            <p>No feedback given</p>
        )
    }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (

      <div>
        <Header text={"give feedback"} />
        <Button handleClick={() => setGood(good + 1)} text={"good"} />
        <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
        <Button handleClick={() => setBad(bad + 1)} text={"bad"} />
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
  )
}

export default App