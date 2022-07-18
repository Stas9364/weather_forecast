import {forecastAPI, DailyResponseType} from '../../api/apiReaquests';
import {DAILY_FORECAST_TYPE, DailyForecastAction, getDailyForecastAC} from '../actions/dailyForecastAction';
import {AppThunk} from '../weatherAppStore';
import {errorAC} from '../actions/initializationAction';

export type initStateType = typeof initState;

export const initState = {} as DailyResponseType;

export const dailyForecastReducer = (state: initStateType = initState, action: DailyForecastAction): initStateType => {
    switch (action.type) {
        case DAILY_FORECAST_TYPE.GET_DAILY_FORECAST:
            return {...state, ...action.dailyForecastData};
        default:
            return state;
    }
};

//////THUNK

export const getDailyForecastTC = (location: string | null): AppThunk => (dispatch) => {

    forecastAPI.getDailyData(location)
        .then(resp => {
            dispatch(getDailyForecastAC(resp.data));
        })
        .catch(e => {
            dispatch(errorAC(e.response.data.error.message));
        });
};
