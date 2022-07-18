import React from 'react';
import {useAppSelector} from '../../App/app/hooks';
import {DailyForecastComponent} from './DailyForecastComponent/DailyForecastComponent';

export const DailyForecastContainer = () => {
    const data = useAppSelector(state => state.dailyWeather.forecast);

    // if (Object.keys(data.forecastday)) {
    //     data.forecastday.map((el, ind) => console.log(el));
    // }

    return (
        <>
            {/*{data && data.forecastday.map((el, ind) => {*/}
            {/*    <DailyForecastComponent*/}
            {/*        sunrise={}*/}
            {/*        sunset={}*/}
            {/*        date={}*/}
            {/*        avgTempC={}*/}
            {/*        icon={}*/}
            {/*        text={}*/}
            {/*        dailyChanceOfRain={}*/}
            {/*        dailyChanceOfSnow={}*/}
            {/*        dailyWillItRain={}*/}
            {/*        dailyWillItSnow={}*/}
            {/*        maxTempC={}*/}
            {/*        minTempC={}*/}
            {/*        />*/}
            {/*})}*/}
            </>
    );
};

