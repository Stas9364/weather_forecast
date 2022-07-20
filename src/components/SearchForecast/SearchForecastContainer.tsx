import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../App/app/hooks';
import c from './searchForecastContainer.module.css';
import {selectedLocationAC} from '../../bll/actions/initializationAction';

export const SearchForecastContainer = () => {
    const dispatch = useAppDispatch();

    const error = useAppSelector(state => state.initialization.error);

    const [value, setValue] = useState('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' && value.length !== 0) {
            const nameLocation = value.split('')[0].toUpperCase() + value.substring(1);
            dispatch(selectedLocationAC(nameLocation));
            setValue('');
        }
    };

    return (
        <div className={c.autoComplete}>
            <input
                placeholder={!error ? ' Insert city please' : error}
                type="text"
                onKeyDown={onKeyDownHandler}
                onChange={onChangeHandler}
                value={value}
            />
        </div>
    );
};

