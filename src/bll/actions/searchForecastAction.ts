import {SearchCompleteType} from '../../api/apiSearchRequest';

export enum SEARCH_FORECAST {
    GET_FORECAST = 'GET_FORECAST'
}

export type SearchForecastAction = ReturnType<typeof getSearchForecast>;

export const getSearchForecast = (weatherData: Array<SearchCompleteType>) => ({
    type: SEARCH_FORECAST.GET_FORECAST, weatherData
} as const);
