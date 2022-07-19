import React from 'react';
import {getCurrentWeatherTC} from '../../bll/reducers/currentWeatherReducer';
import {useAppDispatch, useAppSelector} from '../../App/app/hooks';
import {AutoComplete} from '../AutoComplete/AutoComplete';
import {capitals} from '../../utils/Capitals';
import {WeatherComponent} from './WetherComponent/WeatherComponent';
import c from './CurrentWeather.module.css'
export const CurrentWeather = React.memo(() => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(state => state.currentWeather);

    // const setDispatchData = (val: string) => {
    //     dispatch(getCurrentWeatherTC(val));
    // };

    return (
        <div className={c.container}>

            {/*<AutoComplete*/}
            {/*    getSelectedValue={(val: string) => setDispatchData(val)}*/}
            {/*    suggestions={capitals}*/}
            {/*/>*/}

            {Object.keys(data).length !== 0
                ? <WeatherComponent location={data.location} current={data.current}/>
                : 'Choose a city'
            }

        </div>
    );
});


