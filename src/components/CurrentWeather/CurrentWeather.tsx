import React from 'react';
import {getCurrentWeatherTC} from '../../bll/reducers/currentWeatherReducer';
import {useAppDispatch, useAppSelector} from '../../App/app/hooks';
import {AutoComplete} from '../AutoComplete/AutoComplete';
import {capitals} from '../../utils/Capitals';
import {WeatherComponent} from './WetherComponent/WeatherComponent';

export const CurrentWeather = React.memo(() => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(state => state.currentWeather.data);

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
                ? <WeatherComponent data={data}/>
                : 'Choose a city'
            }

        </div>
    );
});


