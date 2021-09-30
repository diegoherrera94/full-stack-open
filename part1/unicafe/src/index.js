import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>);

const Statistics = ({text, value}) => (      
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const getTotal = () => (good + neutral + bad);
  const getAverage = () => getTotal() !== 0 ? (good - bad) / getTotal() : 0;
  const getPositive = () => getTotal() !== 0 ? `${good * 100 / getTotal()} %`: 0;

  const handleGood = () => {
    setGood(good + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleBad = () => {
    setBad(bad + 1);
  }

  if(getTotal() === 0){
    return(
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleGood} text="good" />
        <Button handleClick={handleNeutral} text="neutral" />
        <Button handleClick={handleBad} text="bad" />
        <h1>statistics</h1>
        <h3>No feedback given</h3>
      </div>
    );
  }
  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistics text="good" value={good} />
          <Statistics text="neutral" value={neutral} />
          <Statistics text="bad" value={bad} />
          <Statistics text="all" value={getTotal()} />
          <Statistics text="average" value={getAverage()} />
          <Statistics text="positive" value={getPositive()} />
        </tbody>
      </table>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));