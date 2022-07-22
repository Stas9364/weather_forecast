import {CURRENT_WEATHER_TYPE, CurrentWeatherAction, getCurrentWeatherAC} from '../actions/currentWeatherAction';
import {forecastAPI, ResponseCurrentWeatherType} from '../../api/apiReaquests';
import {AppThunk} from '../weatherAppStore';
import {errorAC, selectedLocationAC} from '../actions/initializationAction';

export type InitStateType = typeof initState;

export const initState = {} as ResponseCurrentWeatherType;

export const currentWeatherReducer = (state: InitStateType = initState, action: CurrentWeatherAction): InitStateType => {
    switch (action.type) {
        case CURRENT_WEATHER_TYPE.GET_CURRENT_WEATHER:
            return {
                // ...state,location:{...action.currentWeatherData.location},current:{...action.currentWeatherData.current}
                // ...state,location:state.location.lat === action.currentWeatherData.location.lat?state.location:action.currentWeatherData.location,current:action.currentWeatherData.current
                ...state,
                ...action.currentWeatherData
            };
        default:
            return state;
    }
};

/////THUNK

export const getCurrentWeatherTC = (location: string): AppThunk => (dispatch) => {
    dispatch(errorAC(null));
    forecastAPI.getCurrentData(location)
        .then(resp => {
            dispatch(getCurrentWeatherAC(resp.data));
            dispatch(selectedLocationAC(resp.data.location.name));
        })
        .catch(e => {
            dispatch(errorAC(e.response.data.error.message));
        });
};
