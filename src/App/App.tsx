import React, {useEffect} from 'react';
import c from './App.module.css';
import {useAppDispatch, useAppSelector} from './app/hooks';
import {CurrentWeather} from '../components/CurrentWeather/CurrentWeather';
import {getCurrentWeatherTC} from '../bll/reducers/currentWeatherReducer';
import {NavBar} from '../components/NavBar/NavBar';
import {Navigate, Route, Routes} from 'react-router-dom';
import {DailyForecastContainer} from '../components/DailyForecast/DailyForecastContainer';
import {HourlyForecastContainer} from '../components/Forecast/HourlyForecastContainer';
import {SearchForecastContainer} from '../components/SearchForecast/SearchForecastContainer';
import {Component404} from '../components/Component404/Component404';
import {Preloader} from '../components/Preloader/Preloader';

export const App = () => {
    const dispatch = useAppDispatch();
    const initValue = useAppSelector(state => state.initialization.selectedLocation);
    const data = useAppSelector(state => state.currentWeather);

    useEffect(() => {
        setTimeout(() => {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const {latitude, longitude} = position.coords;
                    const lat = latitude.toString();
                    const lon = longitude.toString();
                    if (initValue === null) {
                        dispatch(getCurrentWeatherTC(`${lat} ${lon}`));
                    }
                    if (initValue) {
                        dispatch(getCurrentWeatherTC(initValue));
                    }
                }, function (error) {
                    if (error.code === 1) {
                        alert('Sorry, but I need to know your location!');
                    }
                });
        }, 2000);
    }, [initValue]);


    if (initValue === null) {
        return <Preloader/>;
    }
    return (
        <div className={c.App}>

            <div className={c.line}></div>

            <div className={c.search}>

                <NavBar/>
                {Object.keys(data).length !== 0 ? <div className={c.city}>{data.location.name}</div> : <div></div>}
                <div className={c.forecast}><SearchForecastContainer/></div>

            </div>

            <Routes>
                <Route path={'/'} element={<CurrentWeather/>}/>
                <Route path={'/hourly'} element={<HourlyForecastContainer/>}/>
                <Route path={'/threeDays'} element={<DailyForecastContainer/>}/>
                <Route path={'/404'} element={<Component404/>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>

            <div className={c.line}></div>

        </div>
    );
};



