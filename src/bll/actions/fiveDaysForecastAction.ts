
export enum FIVE_DAYS_FORECAST {
    GET_FORECAST = 'GET_FORECAST'
}

export type FiveDaysForecastAction = ReturnType<typeof getFiveDaysForecast>;

export const getFiveDaysForecast = (weatherData:any) => ({
    type: FIVE_DAYS_FORECAST.GET_FORECAST,
    weatherData
} as const);
