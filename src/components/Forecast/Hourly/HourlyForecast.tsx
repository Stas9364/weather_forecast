import React from 'react';
import {useAppSelector} from '../../../App/app/hooks';
import {HoursDataType} from "../../../api/apiReaquests";
type ItemType ={
    item:HoursDataType
}

export const HourlyForecast:React.FC<ItemType> = ({item}) => {

        return (
            <div style={{background: 'whitesmoke'
           }}>
                        <img src={item.condition.icon} alt=""/>{item.condition.text}

            </div>
        );

};
