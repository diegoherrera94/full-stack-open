import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return(
    <h1>{props.course.name}</h1>
  );  
}

const Content = (props) => {
  console.log(props);
  const [part1, part2, part3] = props.parts;
  return(
    <div>
      <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} />
    </div>
  );
}

const Part = (props) => {
  return(
    <p>{props.part} {props.exercise}</p>
  );
}

const Total = (props) => {
  const [part1, part2, part3] = props.parts;
  return(
    <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
