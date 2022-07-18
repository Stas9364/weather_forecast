import React, {useEffect} from 'react';
import c from './App.module.css';
import {useAppDispatch} from './app/hooks';
import {CurrentWeather} from '../components/CurrentWeather/CurrentWeather';
import {getCurrentWeatherTC} from '../bll/reducers/currentWeatherReducer';
import {getHourlyForecastTC} from "../bll/reducers/HourlyForecastReducer";

import {HourContainer} from "../components/Forecast/HourContainer";
import {NavBar} from "../components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import {DecorationLine} from "../components/NavBar/DecorationLine";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const {latitude, longitude} = position.coords;
            const lat = latitude.toString();
            const lon = longitude.toString();
            dispatch(getCurrentWeatherTC('minsk'));
            dispatch(getHourlyForecastTC(`${lat} ${lon}`));
        });
    }, [dispatch]);


    return (
        <div className={c.App}>
            <DecorationLine/>
            <NavBar/>
            <Routes>
                <Route path={'/'} element={<CurrentWeather/>}/>
                <Route path={'/hourly'} element={<HourContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;


