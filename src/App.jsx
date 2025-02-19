import { useState, useRef } from 'react'
import './App.css'
import axios from 'axios'
import WeatherInformations from './components/WeatherInformations/index'
import WeatherInformations5Days from './components/WeatherInformations5Days/index'

function App() {
  const [weather, setWeather] = useState(null)
  const [weather5Days, setWeather5Days] = useState(null)
  const inputRef = useRef()

  async function searchCity() {

    const city = inputRef.current.value.trim() // Remove espaços extras

    if (!city) {
      alert("Por favor, digite o nome de uma cidade.") // Exibe o alerta
      return // Cancela a execução da função
    }

    
    const key = "24a092652b2a5617856bf1e2ec12e28b"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=pt_br&units=metric{}&appid=${key}`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)
    console.log(apiInfo5Days);
    
    setWeather5Days(apiInfo5Days.data)
    setWeather(apiInfo.data)
    
    inputRef.current.value = ""
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      searchCity() // Chama a busca quando Enter é pressionado
    }
  }

  return (
    
      <div className='container'>
        <h1>Previsão do Tempo</h1>
        <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" onKeyDown={handleKeyDown} />
        <button onClick={searchCity}>Buscar</button>

        { weather && <WeatherInformations weather={weather} />}
        {weather5Days && <WeatherInformations5Days weather5Days={weather5Days} />}
      </div>
  
  )
}

export default App





