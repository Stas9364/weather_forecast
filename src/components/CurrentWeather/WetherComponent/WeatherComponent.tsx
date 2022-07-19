import React from 'react';
import {ResponseCurrentWeatherType} from '../../../api/apiReaquests';
import c from './CurrentWeatherComponent.module.css';

export const WeatherComponent = (data: ResponseCurrentWeatherType) => {
    return (
        <div className={c.container}>
            <div className={c.name}>{data.location.name}</div>
            <div className={c.secondBlock}>
                <div className={c.picture}>
                    <img src={data.current.condition.icon} alt="showing pic"/>
                </div>
                <div className={c.temp}>{data.current.temp_c} &deg;C</div>
            </div>

            <div className={c.description}>{data.current.condition.text}</div>
            <div className={c.feelsLike}>Feels like: {data.current.feelslike_c} &deg;C</div>
            <div className={c.windSpeed}>Wind speed: {data.current.wind_kph} km/h</div>
            <div className={c.windDir}>Wind direction: {data.current.wind_dir}</div>
            <div className={c.pressure}>Pressure: {data.current.pressure_mb}</div>
            <div className={c.humidity}>Humidity: {data.current.humidity} %</div>
            <div className={c.time}>{data.current.last_updated}</div>
        </div>
    );
};
