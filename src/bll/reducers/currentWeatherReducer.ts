import {CURRENT_WEATHER_TYPE, CurrentWeatherAction, getCurrentWeatherAC} from '../actions/currentWeatherAction';
import {currentWeatherAPI, ResponseCurrentWeatherType} from '../../api/apiReaquests';
import {AppThunk} from '../weatherAppStore';

export type InitStateType = typeof initState;

export const initState = {
    data: {} as ResponseCurrentWeatherType
};

export const currentWeatherReducer = (state: InitStateType = initState, action: CurrentWeatherAction): InitStateType => {
    switch (action.type) {
        case CURRENT_WEATHER_TYPE.GET_CURRENT_WEATHER:
            return {
                ...state,
                data: {...action.currentWeatherData}
            };
        default:
            return state;
    }
};

export const getCurrentWeatherTC = (location?: string | null, lat?: any, lon?: any): AppThunk => (dispatch) => {
    currentWeatherAPI.getCurrentData(location, lat, lon)
        .then(resp => {
            dispatch(getCurrentWeatherAC(resp.data));
        });
};
