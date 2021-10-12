const Weather = ({weather}) => {
    if(Object.keys(weather).length > 0){
        return (
        <>
            <h3>Weather in {weather.location.name}</h3>
            <div><b>temperature: </b>{weather.current.temperature} Celcius</div>
            <img src={weather.current.weather_icons[0]} alt="weather icon" />
            <div><b>wind: </b>{weather.current.wind_speed} mph direction {weather.current.wind_dir}</div>
        </>
        );
    }
    return "";
}

export default Weather;
