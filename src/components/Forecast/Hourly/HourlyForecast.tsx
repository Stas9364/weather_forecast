import React from 'react';
import {HoursDataType} from "../../../api/apiReaquests";
import c from './hourlyForecast.module.css'

type ItemType = {
    item: HoursDataType
}

export const HourlyForecast: React.FC<ItemType> = ({item}) => {
    return (
        <div className={c.container}>

            <div className={c.time}>Time : {item.time}</div>

            <div className={c.temperature}>
                Temp : {item.temp_c}&deg;C
            </div>

            <div className={c.icon}>
                <img src={item.condition.icon} alt=""/>
                <div> {item.condition.text}</div>
            </div>
            <div className={c.chanceOfSnow}>Chance of snow : {item.chance_of_snow} %</div>
            <div className={c.cloud}>Cloud : {item.cloud} %</div>
            <div className={c.chanceOfRain}>Chance of rain : {item.chance_of_rain} %</div>
        </div>
    );

};
