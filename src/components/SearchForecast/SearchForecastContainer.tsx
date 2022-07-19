import React from 'react';
import {useAppDispatch, useAppSelector} from '../../App/app/hooks';

import {getSearchForecastTC} from '../../bll/reducers/searchForecastReducer';
import {AutoComplete} from '../AutoComplete/AutoComplete';
import c from './searchForecastContainer.module.css'
import {getCurrentWeatherTC} from "../../bll/reducers/currentWeatherReducer";

export const SearchForecastContainer = () => {
    const dispatch = useAppDispatch();
    const suggestions = useAppSelector(state => state.search)
    console.log(suggestions)
    const name = suggestions.data.map(item => item.name)
    if (suggestions.data.length) {
        console.log(name)
    }

    const searchHandler = (value: string) => {
        console.log(value)
        dispatch(getSearchForecastTC(value));
        dispatch(getCurrentWeatherTC(value));
         // dispatch(getHourlyForecastTC(value));
    }

    return (
        <div className={c.autoComplete}>
            {/*<button onClick={searchHandler}>Click</button>*/}
            <AutoComplete suggestions={name} getSelectedValue={(value) => searchHandler(value)}/>
        </div>
    );
};

