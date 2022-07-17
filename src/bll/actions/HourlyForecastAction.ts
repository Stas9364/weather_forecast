import {HoursDataType} from "../../api/apiReaquests";

export enum HOURLY_DAYS_FORECAST {
    GET_FORECAST = 'GET_FORECAST'
}

export type HourlyForecastAction = ReturnType<typeof getHourlyForecastAC>;
export const getHourlyForecastAC = (weatherData: Array<HoursDataType>) => ({
    type: HOURLY_DAYS_FORECAST.GET_FORECAST,
    weatherData
} as const);
