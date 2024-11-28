// import './styles.css'

// function WeatherInformations5Days({ weather5Days }) {
//     let dailyForecast = {}

//     for (let forecast of weather5Days.list) {
//         const date = new Date(forecast.dt * 1000).toLocaleDateString()


//         if (!dailyForecast[date]) {
//             dailyForecast[date] = forecast
//         }

//     }

//     const next5DaysForecast = Object.values(dailyForecast).slice(1, 6)
//     console.log(next5DaysForecast);
    

//     function convertDate(date) {
//         const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })
//         return newDate

//     }


//     return (
//         <div className='weather-container'>
//             <h3>Previsão próximos 5 dias</h3>
//             <div className='container-item'>
//                 {next5DaysForecast.map(forecast => (
//                     <div key={forecast.dt} className='weather-item'>
//                         <p>{convertDate(forecast)}</p>
//                         <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} />
//                         <p>{forecast.weather[0].description}</p>
//                         {/* <p>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C máx </p> */}
//                         <p>{Math.round(forecast.main.temp)}°C</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default WeatherInformations5Days





import './styles.css'

function WeatherInformations5Days({ weather5Days }) {
    let dailyForecast = {}

    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }

    const next5DaysForecast = Object.values(dailyForecast).slice(1, 6)

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })
        return newDate
    }

    function kelvinToCelsius(kelvin) {
        return (kelvin - 273.15).toFixed(0); // Converte para Celsius e formata com 1 casa decimal
    }

    return (
        <div className="weather-container">
            <h3>Previsão próximos 5 dias</h3>
            <div className="container-item">
                {next5DaysForecast.map((forecast) => (
                    <div key={forecast.dt} className="weather-item">
                        <p className='forecast-day'>{convertDate(forecast)}</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                            alt={forecast.weather[0].description}
                        />
                        <p>{forecast.weather[0].description}</p>
                        <p>{kelvinToCelsius(forecast.main.temp)}°C</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeatherInformations5Days;
