import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../App/app/hooks';
import {DailyForecastComponent} from './DailyForecastComponent/DailyForecastComponent';
import c from '../DailyForecast/DailyForecastContainer.module.css';
import {getDailyForecastTC} from '../../bll/reducers/dailyForecastReducer';

export const DailyForecastContainer = React.memo(() => {
    const dispatch = useAppDispatch();

    const data = useAppSelector(state => state.dailyWeather.forecast);
    const location = useAppSelector(state => state.initialization.selectedLocation);

    useEffect(() => {
        dispatch(getDailyForecastTC(location));
    }, [location]);


    return (
        <div className={c.container}>
            {data && data.forecastday.map((el, ind) => {
                return (
                    <DailyForecastComponent
                        sunrise={el.astro.sunrise}
                        sunset={el.astro.sunset}
                        date={el.date}
                        avgTempC={el.day.avgtemp_c}
                        icon={el.day.condition.icon}
                        text={el.day.condition.text}
                        dailyChanceOfRain={el.day.daily_chance_of_rain}
                        dailyChanceOfSnow={el.day.daily_chance_of_snow}
                        dailyWillItRain={el.day.daily_will_it_rain}
                        dailyWillItSnow={el.day.daily_chance_of_snow}
                        maxTempC={el.day.maxtemp_c}
                        minTempC={el.day.mintemp_c}
                        key={ind}
                    />
                );
            })}
        </div>
    );
});

