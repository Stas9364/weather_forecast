import React from 'react';
import {useAppSelector} from '../../App/app/hooks';

export const FiveDaysForecast = () => {
    const forecast = useAppSelector(state => state.fiveDaysForecast.list);

    const forecastList = forecast.map((el, index) =>
        <div key={index} style={{border: '1px solid'}}>
            <div>Date: {el.dt_txt}</div>
            <div>Temp: {el.main.temp}</div>
            <div>Description: {el.weather[0].main}</div>
            <div>Wind speed: {el.wind.speed}</div>
            <div>Full description: {el.weather[0].description}</div>
        </div>);

    return (
        <div>
            <div>{forecastList}</div>
        </div>
    );
};

