import Person from './Person'

const Persons = ({ personsToShow }) => {
  return (
    <table>
      <tbody>
        {personsToShow.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </tbody>
    </table>
  )
}

export default Persons
