import React from 'react';

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Total = ({ course }) => {
    const sum = course.parts.reduce((prev, curr) => ({exercises: prev.exercises + curr.exercises}));
    return(
      <h3>Total of exercises {sum.exercises}</h3>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {
          course.parts.map(part => <Part key={part.id} part={part} />)
        }
      </div>
    )
  }
  
  export const Course = ({course}) => {
    return(
      <>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </>
    );
  }