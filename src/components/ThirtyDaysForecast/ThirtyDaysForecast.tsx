import React from 'react';
import {useAppSelector} from '../../App/app/hooks';

export const ThirtyDaysForecast = () => {
    const forecast = useAppSelector(state => state.thirtyDaysForecast);
    console.log(forecast)
   //
   // const forecastList = forecast.map((el, index) => <li key={index}>{el.temp.average}</li>);

    return (
        <div style={{background:'whitesmoke'}}>
            THIRTY DAYS FORECAST
        </div>
    );
};
