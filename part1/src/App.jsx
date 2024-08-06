const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header header={course}/>
      <Content parts={[part1, part2, part3]} ex_amounts={[exercises1, exercises2, exercises3]} />
      <Total total={exercises1 + exercises2 + exercises3} />
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