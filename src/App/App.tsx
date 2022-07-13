import React, {useEffect} from 'react';
import './App.css';
import {CurrentWeather} from '../components/CurrentWeather';
import {getCurrentWeatherTC} from '../bll/reducers/currentWeatherReducer';
import {useAppDispatch} from './app/hooks';
import {getFiveDaysForecastTC} from '../bll/reducers/fiveDaysForecastReducer';
import {FiveDaysForecast} from '../components/FiveDaysForecast/FiveDaysForecast';

function App() {
    const dispatch = useAppDispatch();

    useEffect( ()=>{
        navigator.geolocation.getCurrentPosition(position => {
            const {latitude, longitude} = position.coords;
            const lat = latitude.toString();
            const lon = longitude.toString();
            dispatch(getCurrentWeatherTC(null, lat, lon));
            // dispatch(getFiveDaysForecastTC());
        });
    }, [dispatch]);

    console.log('!@#$%')

    return (
        <div className="App">
            <CurrentWeather />
            <FiveDaysForecast/>
        </div>
    );
}

export default App;


