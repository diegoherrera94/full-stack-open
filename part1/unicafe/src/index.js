import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>)

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const getTotal = () => (good + neutral + bad);
  const getAverage = () => getTotal() !== 0 ? (good - bad) / getTotal() : 0;
  const getPositive = () => getTotal() !== 0 ? good / getTotal() : 0;

  const handleGood = () => {
    setGood(good + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleBad = () => {
    setBad(bad + 1);
  }

  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {getTotal()}</div>
      <div>average {getAverage()}</div>
      <div>positive {getPositive()}</div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
