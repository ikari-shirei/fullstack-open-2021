import Weather from './Weather'

const Country = ({ name, capital, population, language, flag }) => {
  let languages
  language
    ? (languages = language.map((x) => <li key={x.name}>{x.name}</li>))
    : (languages = '')

  if (name && capital && population && language && flag) {
    return (
      <>
        <h2>{name}</h2>
        <p>capital {capital}</p>
        <p>population {population}</p>
        <h3>languages</h3>
        <ul>{languages}</ul>
        <img src={flag} alt="flag" style={{ width: '50%', height: '50%' }} />
        <Weather name={name} />
      </>
    )
  } else {
    return (
      <>
        <p>{name}</p>
      </>
    )
  }
}

export default Country
