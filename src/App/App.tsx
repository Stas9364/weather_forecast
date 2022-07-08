import React, {useEffect} from 'react';
import './App.css';
import {CurrentWeather} from '../components/CurrentWeather';
import {getCurrentWeatherTC} from '../bll/reducers/currentWeatherReducer';
import {useAppDispatch} from './app/hooks';

function App() {
    const dispatch = useAppDispatch();

    useEffect( ()=>{
        navigator.geolocation.getCurrentPosition(position => {
            const {latitude, longitude} = position.coords;
            const lat = latitude.toString();
            const lon = longitude.toString();
            dispatch(getCurrentWeatherTC(null, lat, lon));
        });
    }, [dispatch]);

    return (
        <div className="App">
            <CurrentWeather />
        </div>
    );
}

export default App;


