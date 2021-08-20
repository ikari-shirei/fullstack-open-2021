import Person from './Person'

const Persons = ({ personsToShow, onClick }) => {
  return (
    <div>
      {personsToShow.map((person) => (
        <Person key={person.name} person={person} onClick={onClick} />
      ))}
    </div>
  )
}

export default Persons
