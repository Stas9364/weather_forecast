import React from 'react';
import {useAppSelector} from '../../App/app/hooks';

export const FiveDaysForecast = () => {
    const forecast = useAppSelector(state => state.fiveDaysForecast.list);
    console.log(forecast)

    const forecastList = forecast.map((el, index) => <li key={index}>{el.main.temp}
    </li>);

    return (
        <div>
            <div>Temp: {forecastList}</div>
        </div>
    );
};

