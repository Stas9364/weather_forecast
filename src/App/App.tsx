import React, {useEffect} from 'react';
import c from './App.module.css';
import {useAppDispatch, useAppSelector} from './app/hooks';
import {CurrentWeather} from '../components/CurrentWeather/CurrentWeather';
import {getCurrentWeatherTC} from '../bll/reducers/currentWeatherReducer';
import {NavBar} from '../components/NavBar/NavBar';
import {Navigate, Route, Routes} from 'react-router-dom';
import {DecorationLine} from '../components/NavBar/DecorationLine';
import {DailyForecastContainer} from '../components/DailyForecast/DailyForecastContainer';
import {HourlyForecastContainer} from '../components/Forecast/HourlyForecastContainer';
import {SearchForecastContainer} from '../components/SearchForecast/SearchForecastContainer';
import {Component404} from '../components/Component404/Component404';
import {Preloader} from '../components/Preloader/Preloader';
import {webCamAPI} from "../api/apiReaquests";
import {errorAC} from "../bll/actions/initializationAction";

function App() {
    const dispatch = useAppDispatch();
    const initValue = useAppSelector(state => state.initialization.selectedLocation);

    const isLoading = useAppSelector(state => state.initialization.isLoading);
    const img = useAppSelector(state => state.initialization.error)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const {latitude, longitude} = position.coords;
                const lat = latitude.toString();
                const lon = longitude.toString();
                if (initValue === null) {
                    dispatch(getCurrentWeatherTC(`${lat} ${lon}`));
                }
                // if (initValue ) {
                //     dispatch(getCurrentWeatherTC(initValue));
                // }
            }, function (error) {
                if (error.code === 1) {
                    alert('Sorry, but I need to know your location!');
                }
            });
    }, [initValue]);

    // useEffect(() => {
    //     webCamAPI.getVideo()
    //         .then(resp => {
    //             dispatch(errorAC(resp.data.result.webcams[4].url.current.desktop))
    //             console.log(resp.data.result.webcams[1].url.current.desktop)
    //         });
    // }, []);

    // if (isLoading === 'loading') {
    //     return <Preloader/>;
    // }
    const data = useAppSelector(state => state.currentWeather);
    return (
        <div className={c.App}>
            <DecorationLine/>
            <div className={c.search}>
                <NavBar/>
                {Object.keys(data).length !== 0 ? <div className={c.city}>{data.location.name}</div> : <div></div>}
                <div className={c.forecast}><SearchForecastContainer/></div>
            </div>
            {/*{img && <embed src={img}/>}*/}
            <Routes>
                <Route path={'/'} element={<CurrentWeather/>}/>
                <Route path={'/hourly'} element={<HourlyForecastContainer/>}/>
                <Route path={'/threeDays'} element={<DailyForecastContainer/>}/>
                <Route path={'/404'} element={<Component404/>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
            <DecorationLine/>
        </div>
    );
}

export default App;


