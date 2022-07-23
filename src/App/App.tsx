import React, {useCallback, useEffect} from 'react';
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

    useEffect(() => {
        setTimeout(()=> {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const {latitude, longitude} = position.coords;
                    const lat = latitude.toString();
                    const lon = longitude.toString();
                    if (initValue === null) {
                        dispatch(getCurrentWeatherTC(`${lat} ${lon}`));
                    }
                }, function (error) {
                    if (error.code === 1) {
                        alert('Sorry, but I need to know your location!');
                    }
                });
        }, 2000);
        return(()=>{
            console.log('app sdox')
        })
    }, [initValue]);


    if (initValue === null) {
        return <Preloader/>;
    }
    return (
        <div className={c.App}>

            <div className={c.line}></div>

            <div className={c.search}>

                <NavBar/>
                {initValue ? <div className={c.city}>{initValue}</div> : <div></div>}
                <div className={c.forecast}><SearchForecastContainer/></div>

            </div>
            <RoutesContainer/>
            <div className={c.line}></div>

        </div>
    );
};

