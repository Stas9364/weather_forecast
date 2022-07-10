import {ResponseCurrentWeatherType} from '../../api/apiReaquests';
import {setPic} from '../../utils/setWeatherPicture';
import React from 'react';

export type WeatherComponentType = {
    data: ResponseCurrentWeatherType
}

export const WeatherComponent = (data: WeatherComponentType) => {

    return (
        <>
            <div>{data.data.name}</div>
            <div>Temperature: {data.data.main.temp.toFixed(1)}&deg;</div>
            <div>Feels like: {data.data.main.feels_like.toFixed(1)}&deg;</div>
            <div>Humidity: {data.data.main.humidity}%</div>
            <div>Pressure: {data.data.main.pressure} hPa</div>
            <div><img src={setPic(data.data)} alt="clouds"/></div>
        </>
    );
};
