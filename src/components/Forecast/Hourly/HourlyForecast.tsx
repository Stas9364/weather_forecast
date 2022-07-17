import React from 'react';
import {HoursDataType} from "../../../api/apiReaquests";

type ItemType = {
    item: HoursDataType
}

export const HourlyForecast: React.FC<ItemType> = ({item}) => {
    return (
        <div style={{
            margin:'10% auto',
            background: 'whitesmoke',
            height:'10%',
            width:'40%'
        }}>
           <div>Temp : {item.temp_c}&deg;C;
           </div>
            <img src={item.condition.icon} alt=""/>{item.condition.text}
            <div>Time : {item.time}</div>
           <div>Chance of rain : {item.chance_of_rain} %</div>
        </div>
    );

};
