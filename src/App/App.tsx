import React, {useEffect} from 'react';
import c from './App.module.css';
import {useAppDispatch, useAppSelector} from './app/hooks';
import {getCurrentWeatherTC} from '../bll/reducers/currentWeatherReducer';
import {NavBar} from '../components/NavBar/NavBar';
import {SearchForecastContainer} from '../components/SearchForecast/SearchForecastContainer';
import {Preloader} from '../components/Preloader/Preloader';
import {RoutesContainer} from '../components/RoutesContainer/RoutesContainer';

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

            <RoutesContainer/>

            <div className={c.line}></div>

        </div>
    );
};

