import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../App/app/hooks';
import {WeatherComponent} from './WetherComponent/WeatherComponent';
import c from './CurrentWeather.module.css';
import {getCurrentWeatherTC} from '../../bll/reducers/currentWeatherReducer';

export const CurrentWeather = React.memo(() => {
    const dispatch = useAppDispatch();
    const initValue = useAppSelector(state => state.initialization.selectedLocation);
    useEffect(()=>{
        if (initValue) {
            dispatch(getCurrentWeatherTC(initValue));
        }
    },[initValue]);
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


