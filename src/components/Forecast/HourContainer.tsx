import React from 'react';
import {useAppSelector} from "../../App/app/hooks";
import {HourlyForecast} from "./Hourly/HourlyForecast";

export const HourContainer = () => {
    const hourWeather = useAppSelector(data => data.hourlyWeather)

    return (
        <div style={{ display:'flex'}}>
                HOURLY FORECAST:{
                hourWeather && hourWeather.map((item, id) => <div key={id}>
          <HourlyForecast item={item}/>
                </div>)
            }
        </div>
    );
};

