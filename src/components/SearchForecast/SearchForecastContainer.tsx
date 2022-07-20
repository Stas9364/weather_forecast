import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../App/app/hooks';
import c from './searchForecastContainer.module.css'
import {selectedLocationAC} from '../../bll/actions/initializationAction';

export const SearchForecastContainer = React.memo(() => {
    const dispatch = useAppDispatch();

    const suggestions = useAppSelector(state => state.search);//откуда берутся здесь обьекты????
    const error = useAppSelector(state => state.initialization.error);
    const name = suggestions.data.map(item => item.name);


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
        if (e.code === 'Enter' && value.length !== 0) {
            dispatch(selectedLocationAC(value));
            setValue('');
        }
    };

    return (
        <div className={c.autoComplete}>
            <input
                placeholder={!error ? "insert city please" : error}
                type="text"
                onKeyDown={onKeyDownHandler}
                onChange={onChangeHandler}
                value={value}
            />
        </div>
    );
});

