import {getSearchForecast, SEARCH_FORECAST, SearchForecastAction} from '../actions/searchForecastAction';
import {AppThunk} from '../weatherAppStore';
import {searchAPI, SearchCompleteType} from '../../api/apiSearchRequest';

export type InitStateType = typeof initState;

export const initState = {
    data: [] as Array<SearchCompleteType>
};

export const searchForecastReducer = (state: InitStateType = initState, action: SearchForecastAction): InitStateType => {
    switch (action.type) {
        case SEARCH_FORECAST.GET_FORECAST:
            return {...state, data: [...action.weatherData]};
        default:
            return state;
    }
};

/////THUNK
// export const getSearchForecastTC = (value: string): AppThunk => (dispatch) => {
//     searchAPI.getSearchData(value)
//         .then(res => {
//             dispatch(getSearchForecast(res.data));
//         });
// };



