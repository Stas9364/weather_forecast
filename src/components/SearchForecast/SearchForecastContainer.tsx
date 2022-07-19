import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../App/app/hooks';

import {getSearchForecastTC} from '../../bll/reducers/searchForecastReducer';
import {AutoComplete} from '../AutoComplete/AutoComplete';
import c from './searchForecastContainer.module.css'
import {getCurrentWeatherTC} from '../../bll/reducers/currentWeatherReducer';
import {selectedLocationAC} from '../../bll/actions/initializationAction';

export const SearchForecastContainer = React.memo (() => {
    const dispatch = useAppDispatch();

    const suggestions = useAppSelector(state => state.search);//откуда берутся здесь обьекты????
    const error = useAppSelector(state => state.initialization.error);
    const name = suggestions.data.map(item => item.name);
    const data = useAppSelector(state => state.currentWeather);

    const [value, setValue] = useState('');



    // const searchHandler = (value: string) => {
    //     dispatch(selectedLocationAC(value))
    //     console.log(value)
    //     if (value.length > 2) {
            // dispatch(getSearchForecastTC(value));
        // }
        // dispatch(getCurrentWeatherTC(value));
         // dispatch(getHourlyForecastTC(value));
    // };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            dispatch(selectedLocationAC(value));
            setValue('');
        }
    };

    return (
        <div className={c.autoComplete}>
            {/*<button onClick={searchHandler}>Click</button>*/}
            {/*<AutoComplete*/}
            {/*    suggestions={name}*/}
            {/*    getSelectedValue={(value) => searchHandler(value)}*/}
            {/*/>*/}

            {Object.keys(data).length !== 0
                ? <div style={{color: 'white'}}>{data.location.name}</div>
                : <div></div>
            }


            <input
                type="text"
                onKeyDown={onKeyDownHandler}
                onChange={onChangeHandler}
                value={value}
            />
            <div>{error}</div>
        </div>
    );
} );

