import React from 'react';
import c from '../DailyForecastComponent/DailyForecastComponent.module.css';

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

export const DailyForecastComponent: React.FC<DailyForecastComponentType> = React.memo(({
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
            <div className={c.date}>{date}</div>

            <div className={c.container}>

                <div className={c.leftSide}>

                    <div className={c.tempAndPic}>
                        <div>
                            <img src={icon} alt="weather pic"/>
                        </div>
                        <div>Average temperature: <h1 className={c.averTemp}>{avgTempC}&deg;C</h1></div>
                    </div>

                    <div className={c.description}>{text}</div>

                    <div className={c.astronomy}>
                        <div>Sunrise: {sunrise}</div>
                        <div>Sunset: {sunset}</div>
                    </div>

                </div>

                <div className={c.rightSide}>

                    <div className={c.maxMin}>
                        <div>Min temperature: <h1>{minTempC}&deg;C</h1></div>
                        <div>Max temperature: <h1>{maxTempC}&deg;C</h1></div>
                    </div>

                    <div className={c.chanceContainer}>

                        <div className={c.willRain}>
                            <div>Wil it rain: {dailyWillItRain}%</div>
                            <div>Will it snow: {dailyWillItSnow}%</div>
                        </div>

                        <div className={c.chanceRain}>
                            <div>Chance of rain: {dailyChanceOfRain}%</div>
                            <div>Chance of snow: {dailyChanceOfSnow}%</div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
});


