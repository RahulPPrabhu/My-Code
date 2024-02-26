import axios from 'axios'
import React from 'react'

function Weather() {
    
  return (
    <div>
        <button onClick={handleWeather}>Get Weather</button>
    </div>
  )
}

export default Weather