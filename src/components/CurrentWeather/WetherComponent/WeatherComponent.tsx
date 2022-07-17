import React from 'react';
import {ResponseCurrentWeatherType} from '../../../api/apiReaquests';

export const WeatherComponent = (data: ResponseCurrentWeatherType) => {
    return (
        <div>
            <div>{data.location.name}</div>
            <div>{data.current.last_updated}</div>
            <div>Description: {data.current.condition.text}</div>
            <div><img src={data.current.condition.icon} alt="showing pic"/></div>
            <div>Temperature: {data.current.temp_c} C&deg;</div>
            <div>Feels like: {data.current.feelslike_c} C&deg;</div>
            <div>Wind speed: {data.current.wind_kph} km/h</div>
            <div>Wind direction: {data.current.wind_dir}</div>
            <div>Pressure: {data.current.pressure_mb}</div>
            <div>Humidity: {data.current.humidity} %</div>
        </div>
    );
};
