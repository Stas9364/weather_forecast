import React from 'react';
import {ResponseCurrentWeatherType} from '../../../api/apiReaquests';

export const WeatherComponent = (data: ResponseCurrentWeatherType) => {
    console.log(data)
    return (
        <>
            CURRENT WEATHER
        </>
    );
};
