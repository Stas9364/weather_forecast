import {FIVE_DAYS_FORECAST, FiveDaysForecastAction, getFiveDaysForecast} from '../actions/fiveDaysForecastAction';
import {AppThunk} from '../weatherAppStore';
import {currentWeatherAPI} from '../../api/apiReaquests';

export type InitStateType = typeof initState;

export const initState = {};

const fiveDaysForecastReducer = (state: InitStateType = initState, action: FiveDaysForecastAction): InitStateType => {
    switch (action.type) {
        case FIVE_DAYS_FORECAST.GET_FORECAST:
            return {
                ...state, ...action.weatherData
            };
        default:
            return state;
    }
};

/////THUNK

// export const getFiveDaysForecastTC = (): AppThunk => (dispatch) => {
//     currentWeatherAPI.getFiveDaysForecast('Minsk')
//         .then(resp => {
//             dispatch(getFiveDaysForecast(resp.data.list));
//         });
// };



