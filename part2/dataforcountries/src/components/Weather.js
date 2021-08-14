import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ name }) => {
  const [currentWeather, setCurrentWeather] = useState('')

  const getWeather = (targetName = name) => {
    const api_key = process.env.REACT_APP_API_KEY

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${targetName}&appid=${api_key}&units=metric`
      )
      .then((response) => {
        setCurrentWeather(response.data)
      })
  }

  useEffect(getWeather, [name])

  if (currentWeather) {
    return (
      <div>
        <h3>Weather in {name}</h3>

        <p>
          <strong>temperature:</strong> {currentWeather.main.temp.toFixed()}{' '}
          celcius
        </p>

        <img
          src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
          alt="weather-icon"
          style={{ backgroundColor: 'Aqua' }}
        />

        <p>
          <strong>wind:</strong> {currentWeather.wind.speed} mph
        </p>
      </div>
    )
  } else {
    return <></>
  }
}

export default Weather
