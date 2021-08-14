const Countries = ({ value, onClick }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <p>{value}</p>
      <button id={value} onClick={onClick} style={{ height: '25px' }}>
        Show
      </button>
    </div>
  )
}

export default Countries
