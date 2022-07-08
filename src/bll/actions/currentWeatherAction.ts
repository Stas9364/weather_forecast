import {ResponseCurrentWeatherType} from '../../api/apiReaquests';

export enum CURRENT_WEATHER_TYPE {
    GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER'
}
export type CurrentWeatherAction = ReturnType<typeof getCurrentWeatherAC>

export const getCurrentWeatherAC = (currentWeatherData: ResponseCurrentWeatherType) => ({
    type: CURRENT_WEATHER_TYPE.GET_CURRENT_WEATHER,
    currentWeatherData
} as const);