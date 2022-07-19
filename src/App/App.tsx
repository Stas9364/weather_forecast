import React, {useEffect} from 'react';
import c from './App.module.css';
import {useAppDispatch} from './app/hooks';
import {CurrentWeather} from '../components/CurrentWeather/CurrentWeather';
import {getCurrentWeatherTC} from '../bll/reducers/currentWeatherReducer';
import {NavBar} from '../components/NavBar/NavBar';
import {Route, Routes} from 'react-router-dom';
import {DecorationLine} from '../components/NavBar/DecorationLine';
import {DailyForecastContainer} from '../components/DailyForecast/DailyForecastContainer';
import {HourlyForecastContainer} from '../components/Forecast/HourlyForecastContainer';
import {SearchForecastContainer} from "../components/SearchForecast/SearchForecastContainer";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const {latitude, longitude} = position.coords;
            const lat = latitude.toString();
            const lon = longitude.toString();
            dispatch(getCurrentWeatherTC(`${lat} ${lon}`));
        });
    }, [dispatch]);


    return (
        <div className={c.App}>
            <DecorationLine/>
            <div className={c.search}>
                <NavBar/>
                <SearchForecastContainer/>
            </div>

            <Routes>
                <Route path={'/'} element={<CurrentWeather/>}/>
                <Route path={'/hourly'} element={<HourlyForecastContainer/>}/>
                <Route path={'/threeDays'} element={<DailyForecastContainer/>}/>
            </Routes>

        </div>
    );
}

export default App;


