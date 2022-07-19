import React from 'react';
import {HoursDataType} from '../../../api/apiReaquests';
import c from './hourlyForecast.module.css';

type ItemType = {
    item: HoursDataType
}

export const HourlyForecast: React.FC<ItemType> = React.memo(({item}) => {
    return (
        <div className={c.container}>

            <div className={c.time}>{item.time}</div>

            <div className={c.icon}>
                <div>
                    <img src={item.condition.icon} alt=""/>
                    <div> {item.condition.text}</div>
                </div>
                <div className={c.temperature}>
                    {item.temp_c}&deg;C
                </div>
            </div>
            <div className={c.feels}>Feels like {item.feelslike_c}&deg;C</div>
            <div className={c.cloud}>Cloud : {item.cloud} %</div>
            <div className={c.chanceOfSnow}>Chance of snow : {item.chance_of_snow} %</div>
            <div className={c.chanceOfRain}>Chance of rain : {item.chance_of_rain} %</div>
        </div>
    );

});
