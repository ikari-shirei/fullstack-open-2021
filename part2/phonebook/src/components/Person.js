import DeleteButton from './DeleteButton'

const Person = ({ person, onClick }) => (
  <div>
    <p>{person.name}</p>
    <p>{person.number}</p>
    <DeleteButton name={person.name} onClick={onClick} />
  </div>
)

export default Person
