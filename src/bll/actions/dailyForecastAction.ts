import {DailyResponseType} from '../../api/apiReaquests';

export enum DAILY_FORECAST_TYPE {
    GET_DAILY_FORECAST = 'GET_DAILY_FORECAST'
}
export type DailyForecastAction = ReturnType<typeof getDailyForecastAC>

export const getDailyForecastAC = (dailyForecastData: DailyResponseType) => ({
    type: DAILY_FORECAST_TYPE.GET_DAILY_FORECAST, dailyForecastData
} as const);