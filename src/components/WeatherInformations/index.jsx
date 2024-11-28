import './styles.css'



function WeatherInformations({ weather }) {
    

    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>
            <div className='weather-info'>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
                <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
            </div>
            <p className='description'>{weather.weather[0].description}</p>
            <div className='details'>
                <p>Humidade: {weather.main.humidity}%</p>
                <p>Sensação termica: {Math.round(weather.main.feels_like)}°C</p>
                <p>Pressão atmosferica: {weather.main.pressure}hPa</p>
            </div>
        </div>
    )
}

export default WeatherInformations