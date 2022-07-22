import {Navigate, Route, Routes} from 'react-router-dom';
import {CurrentWeather} from '../CurrentWeather/CurrentWeather';
import {HourlyForecastContainer} from '../Forecast/HourlyForecastContainer';
import {ThreeDaysForecastContainer} from '../ThreeDaysForecast/ThreeDaysForecastContainer';
import {Error404} from '../Error404/Error404';
import React from 'react';

export const RoutesContainer = () => {
    return (
        <Routes>
            <Route path={'/'} element={<CurrentWeather/>}/>
            <Route path={'/hourly'} element={<HourlyForecastContainer/>}/>
            <Route path={'/threeDays'} element={<ThreeDaysForecastContainer/>}/>
            <Route path={'/404'} element={<Error404/>}/>
            <Route path={'*'} element={<Navigate to={'/404'}/>}/>
        </Routes>
    );
};
