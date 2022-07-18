import React from 'react';

type DailyForecastComponentType = {
    sunrise: string
    sunset: string
    date: string
    avgTempC: number
    icon: string
    text: string
    dailyChanceOfRain: number
    dailyChanceOfSnow: number
    dailyWillItRain: number
    dailyWillItSnow: number
    maxTempC: number
    minTempC: number
}

export const DailyForecastComponent: React.FC<DailyForecastComponentType> = ({
                                                                                 text,
                                                                                 date,
                                                                                 minTempC,
                                                                                 avgTempC,
                                                                                 dailyChanceOfRain,
                                                                                 dailyChanceOfSnow,
                                                                                 dailyWillItRain,
                                                                                 dailyWillItSnow,
                                                                                 sunrise,
                                                                                 sunset,
                                                                                 maxTempC,
                                                                                 icon
}) => {
    return (
        <div>

        </div>
    );
};



