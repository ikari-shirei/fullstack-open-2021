const Notification = ({ message }) => {
  if (message) {
    const messageContent = message[0]
    const color = message[1]

    const greenStyle = {
      color: 'green',
      border: '2px solid green',
      padding: '8px',
    }
    const redStyle = {
      color: 'red',
      border: '2px solid red',
      padding: '8px',
    }

    const whichStyle = color === 'green' ? greenStyle : redStyle

    return <h1 style={whichStyle}>{messageContent}</h1>
  } else {
    return null
  }
}

export default Notification
