import React from 'react';
import {useAppSelector} from '../../App/app/hooks';
import {WeatherComponent} from './WetherComponent/WeatherComponent';
import c from './CurrentWeather.module.css';

export const CurrentWeather = React.memo(() => {

    const data = useAppSelector(state => state.currentWeather);

    return (
        <div className={c.container}>
            {Object.keys(data).length !== 0
                ? <WeatherComponent location={data.location} current={data.current}/>
                : 'Choose a city'
            }
        </div>
    );
});


