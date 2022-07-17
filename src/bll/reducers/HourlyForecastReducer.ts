import {getHourlyForecastAC, HOURLY_DAYS_FORECAST, HourlyForecastAction} from '../actions/HourlyForecastAction';
import {HoursDataType} from "../../api/apiReaquests";
import {AppThunk} from "../weatherAppStore";
import {hourlyWeatherAPI} from "../../api/apiHourlyRequests";

export type InitStateType = typeof initStateHour;

export const initStateHour = [] as Array<HoursDataType>;

 export const hourlyForecastReducer = (state: InitStateType = initStateHour, action: HourlyForecastAction): InitStateType => {
    switch (action.type) {
        case HOURLY_DAYS_FORECAST.GET_FORECAST:
            return [
                ...state, ...action.weatherData
            ];
        default:
            return state;
    }
};

/////THUNK

export const getHourlyForecastTC=(location:string):AppThunk=>(dispatch)=>{
    hourlyWeatherAPI.getHourlyData(location)
        .then(res=>{
            dispatch(getHourlyForecastAC(res.data.forecast.forecastday[0].hour))
        })
}




