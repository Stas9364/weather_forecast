import {ResponseThirtyDaysForecast} from "../../api/apiReaquests";

export enum THIRTY_DAYS_FORECAST {
    GET_FORECAST = 'GET_FORECAST'
}

export type ThirtyDaysForecastAction = ReturnType<typeof getThirtyDaysForecastAC>;

export const getThirtyDaysForecastAC = (weatherData: ResponseThirtyDaysForecast) => ({
    type: THIRTY_DAYS_FORECAST.GET_FORECAST,
    weatherData
} as const);
