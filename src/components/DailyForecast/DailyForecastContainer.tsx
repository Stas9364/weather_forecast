import React from 'react';
import {useAppSelector} from '../../App/app/hooks';
import {DailyForecastComponent} from './DailyForecastComponent/DailyForecastComponent';
import c from '../DailyForecast/DailyForecastContainer.module.css';

export const DailyForecastContainer = () => {
    const data = useAppSelector(state => state.dailyWeather.forecast);

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
};

