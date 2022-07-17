import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch} from './app/hooks';
import {CurrentWeather} from '../components/CurrentWeather/CurrentWeather';
import {getCurrentWeatherTC} from '../bll/reducers/currentWeatherReducer';
import {getHourlyForecastTC} from "../bll/reducers/HourlyForecastReducer";
import {HourlyForecast} from "../components/Forecast/Hourly/HourlyForecast";
import {HourContainer} from "../components/Forecast/HourContainer";

function App() {
    const dispatch = useAppDispatch();

    useEffect( ()=>{
        navigator.geolocation.getCurrentPosition(position => {
            const {latitude, longitude} = position.coords;
            const lat = latitude.toString();
            const lon = longitude.toString();
            dispatch(getCurrentWeatherTC('minsk'));
            dispatch(getHourlyForecastTC(`${lat} ${lon}`))
        });
    }, [dispatch]);


    return (
        <div className="App">
            <CurrentWeather />
            <HourContainer/>
        </div>
    );
}

export default App;


