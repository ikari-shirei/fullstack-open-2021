import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import Country from './components/Country'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  const getCountries = () => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountries(response.data)
    })
  }

  useEffect(getCountries, [])

  const handleFilter = (event) => {
    const value = event.target.value

    const filtered = countries.filter((x) =>
      x.name.toLowerCase().includes(value.toLowerCase())
    )

    filtered.length >= 10
      ? setFilteredCountries([
          { name: 'Too many matches, specify another filter' },
        ])
      : setFilteredCountries(filtered)

    value === '' && setFilteredCountries([{ name: '' }])
  }

  const handleCountryButton = (event) => {
    const targetCountry = countries.filter((x) => x.name === event.target.id)
    setFilteredCountries(targetCountry)
  }

  const countryCount =
    filteredCountries.length === 1
      ? filteredCountries.map((val, i) => (
          <Country
            key={i}
            name={val.name}
            capital={val.capital}
            population={val.population}
            language={val.languages}
            flag={val.flag}
          />
        ))
      : filteredCountries.map((val, i) => (
          <Countries key={i} value={val.name} onClick={handleCountryButton} />
        ))

  return (
    <>
      <Filter onChange={handleFilter} />
      <div>{countryCount}</div>
    </>
  )
}

export default App
