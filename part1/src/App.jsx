const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header header={course}/>
      <Content parts={[part1.name, part2.name, part3.name]} ex_amounts={[part1.exercises, part2.exercises, part3.exercises]} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
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
      <Part part={props.parts[0]} ex_amount={props.ex_amounts[0]}/>
      <Part part={props.parts[1]} ex_amount={props.ex_amounts[1]}/>
      <Part part={props.parts[2]} ex_amount={props.ex_amounts[2]}/>
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
    <p>Total course exercises: {props.total}</p>
  )
}

export default App 