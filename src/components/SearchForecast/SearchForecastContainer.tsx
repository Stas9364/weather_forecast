import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../App/app/hooks';
import {SearchAutocomplete} from './Search/SearchAutocomplete';
import {getSearchForecastTC} from '../../bll/reducers/searchForecastReducer';
import {AutoComplete} from '../AutoComplete/AutoComplete';

export const SearchForecastContainer = () => {
    useEffect(() => {
        dispatch(getSearchForecastTC('lon'));
    });
    const dispatch = useAppDispatch();
    const suggestions = useAppSelector(state => state.search)
    console.log(suggestions)
    // if(suggestions.length){
    //     const name = suggestions.filter(item=>item.name)
    //     console.log(name)
    // }

    const searchHandler = (value: string) => {
        dispatch(getSearchForecastTC(value));
    };

    return (
        <div>
            {/*<AutoComplete suggestions={name} getSelectedValue={(value)=>searchHandler}/>*/}
        </div>
    );
};

