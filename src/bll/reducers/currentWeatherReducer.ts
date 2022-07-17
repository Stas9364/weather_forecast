import {CURRENT_WEATHER_TYPE, CurrentWeatherAction, getCurrentWeatherAC} from '../actions/currentWeatherAction';
import {currentWeatherAPI, ResponseCurrentWeatherType} from '../../api/apiReaquests';
import {AppThunk} from '../weatherAppStore';
import {errorAC} from "../actions/InitializationAction";

export type InitStateType = typeof initState;

export const initState = {} as ResponseCurrentWeatherType;

export const currentWeatherReducer = (state: InitStateType = initState, action: CurrentWeatherAction): InitStateType => {
    switch (action.type) {
        case CURRENT_WEATHER_TYPE.GET_CURRENT_WEATHER:
            return {
                ...state,
               ...action.currentWeatherData
            };
        default:
            return state;
    }
};

/////THUNK

export const getCurrentWeatherTC = (location: string): AppThunk => (dispatch) => {
    currentWeatherAPI.getCurrentData(location)
        .then(resp => {
            dispatch(getCurrentWeatherAC(resp.data));
        })
        .catch(e => {
            console.log(e.response.data.error.message)
            dispatch(errorAC(e.response.data.error.message));
        });
};
