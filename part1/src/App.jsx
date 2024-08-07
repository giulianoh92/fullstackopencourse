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
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header header={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.header}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} ex_amount={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} ex_amount={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} ex_amount={props.parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return(
    <>
      <p>Part name: {props.part}</p>
      <p>Number of exercises: {props.ex_amount}</p>
    </>
  )
}

const Total = (props) => {
  return(
    <p>Total course exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

export default App 