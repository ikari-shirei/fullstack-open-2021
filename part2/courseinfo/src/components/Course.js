const Header = ({ course }) => {
  return <h1>{course.name}</h1>
}

const Total = ({ course }) => {
  const sum = course.parts
    .map((part) => part.exercises)
    .reduce((x, y) => x + y, 0)
  return (
    <p>
      <strong>Number of exercises {sum}</strong>
    </p>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <>
      {course.map((subject) => {
        return (
          <div key={subject.id}>
            <Header course={subject} />
            <Content course={subject} />
            <Total course={subject} />
          </div>
        )
      })}
    </>
  )
}

export default Course
