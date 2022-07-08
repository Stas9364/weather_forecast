import React from 'react';
import {getCurrentWeatherTC} from '../bll/reducers/currentWeatherReducer';
import {useAppDispatch, useAppSelector} from '../App/app/hooks';
import {AutoComplete} from './AutoComplete/AutoComplete';
import {capitals} from '../utils/Capitals';
import {setPic} from '../utils/setWeatherPicture';

export const CurrentWeather = React.memo (() => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(state => state.currentWeather.data);
    console.log(data)

    const setDispatchData = (val: string) => {
        dispatch(getCurrentWeatherTC(val));
    };

    return (
        <div>

            <AutoComplete
                getSelectedValue={(val: string) => setDispatchData(val)}
                suggestions={capitals}
            />

            {Object.keys(data).length !== 0
                ? <div>
                    <div>{data.name}</div>
                    <div>Temperature: {data.main.temp}&deg;</div>
                    <div>Feels like: {data.main.feels_like}&deg;</div>
                    <div>Humidity: {data.main.humidity}%</div>
                    <div>Pressure: {data.main.pressure} hPa</div>
                    <div><img src={setPic(data)} alt="clouds"/></div>
                </div>
                : ''
            }


        </div>
    );
} );

