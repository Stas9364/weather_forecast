import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch} from './app/hooks';
import {CurrentWeather} from '../components/CurrentWeather/CurrentWeather';

function App() {
    const dispatch = useAppDispatch();

    useEffect( ()=>{
        navigator.geolocation.getCurrentPosition(position => {
            const {latitude, longitude} = position.coords;
            const lat = latitude.toString();
            const lon = longitude.toString();
            // dispatch(getCurrentWeatherTC());

        });
    }, [dispatch]);


    return (
        <div className="App">
            <CurrentWeather />
        </div>
    );
}

export default App;


