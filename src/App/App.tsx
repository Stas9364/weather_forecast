import React, {useEffect} from 'react';
import './App.css';
import {CurrentWeather} from '../components/CurrentWeather/CurrentWeather';
import {getCurrentWeatherTC} from '../bll/reducers/currentWeatherReducer';
import {useAppDispatch} from './app/hooks';
import {getFiveDaysForecastTC} from '../bll/reducers/fiveDaysForecastReducer';
import {FiveDaysForecast} from '../components/FiveDaysForecast/FiveDaysForecast';
import {ThirtyDaysForecast} from "../components/ThirtyDaysForecast/ThirtyDaysForecast";
import {getThirtyDaysForecastTC} from "../bll/reducers/ThirtyDaysForecastReducer";

function App() {
    const dispatch = useAppDispatch();

    useEffect( ()=>{
        navigator.geolocation.getCurrentPosition(position => {
            const {latitude, longitude} = position.coords;
            const lat = latitude.toString();
            const lon = longitude.toString();
            dispatch(getCurrentWeatherTC(null, lat, lon));
            dispatch(getThirtyDaysForecastTC());

            dispatch(getFiveDaysForecastTC());
        });
    }, [dispatch]);


    return (
        <div className="App">
            <CurrentWeather />
            <FiveDaysForecast/>
            <ThirtyDaysForecast/>
        </div>
    );
}

export default App;


