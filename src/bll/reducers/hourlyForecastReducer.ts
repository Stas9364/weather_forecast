import {forecastAPI, HoursDataType} from '../../api/apiReaquests';
import {AppThunk} from '../weatherAppStore';
import {getHourlyForecastAC, HOURLY_DAYS_FORECAST, HourlyForecastAction} from '../actions/hourlyForecastAction';
import {isLoadingAC} from '../actions/initializationAction';

export type InitStateType = typeof initStateHour;

export const initStateHour = {
    data: [] as Array<HoursDataType>
};


export const hourlyForecastReducer = (state: InitStateType = initStateHour, action: HourlyForecastAction): InitStateType => {
    switch (action.type) {
        case HOURLY_DAYS_FORECAST.GET_FORECAST:
            return {...state, data: [...action.weatherData]};
        default:
            return state;
    }
};

/////THUNK

export const getHourlyForecastTC = (location: string | null): AppThunk => (dispatch) => {
    dispatch(isLoadingAC('loading'));

    forecastAPI.getHourlyData(location)
        .then(res => {
            dispatch(getHourlyForecastAC(res.data.forecast.forecastday[0].hour));
            dispatch(isLoadingAC('success'));

        });
};




