import React from 'react';
import {ResponseCurrentWeatherType} from '../../../api/apiReaquests';
import styles from '../CurrentWeather.module.css';

export const WeatherComponent = (data: ResponseCurrentWeatherType) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>{data.location.name}</div>
            <div className={styles.picture}><img src={data.current.condition.icon} alt="showing pic"/></div>
            <div className={styles.temp}>{data.current.temp_c} &deg;C</div>
            <div className={styles.description}>{data.current.condition.text}</div>
            <div className={styles.feelsLike}>Feels like: {data.current.feelslike_c} &deg;C</div>
            <div className={styles.windSpeed}>Wind speed: {data.current.wind_kph} km/h</div>
            <div className={styles.windDir}>Wind direction: {data.current.wind_dir}</div>
            <div className={styles.pressure}>Pressure: {data.current.pressure_mb}</div>
            <div className={styles.humidity}>Humidity: {data.current.humidity} %</div>
            <div className={styles.time}>{data.current.last_updated}</div>
        </div>
    );
};
