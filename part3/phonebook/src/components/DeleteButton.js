const DeleteButton = ({ name, onClick }) => {
  return (
    <button id={name} onClick={onClick}>
      Delete
    </button>
  )
}

export default DeleteButton
