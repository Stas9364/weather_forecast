import {
    getThirtyDaysForecastAC,
    THIRTY_DAYS_FORECAST,
    ThirtyDaysForecastAction
} from '../actions/ThirtyDaysForecastAction';

export type InitStateType = typeof initState;

export const initState = {

} as any;

const thirtyDaysForecastReducer = (state: InitStateType = initState, action: ThirtyDaysForecastAction): InitStateType => {
    switch (action.type) {
        case THIRTY_DAYS_FORECAST.GET_FORECAST:
            return {
                ...state, ...action.weatherData
            };
        default:
            return state;
    }
};

/////THUNK

// export const getThirtyDaysForecastTC = (): AppThunk => (dispatch) => {
//     currentWeatherAPI.getThirtyDaysForecast('Minsk')
//         .then(resp => {
//             console.log(resp.data)
//            dispatch(getThirtyDaysForecastAC(resp.data.city.coord));
//         });
// };



