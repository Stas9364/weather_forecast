import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {currentWeatherReducer} from './reducers/currentWeatherReducer';
import {CurrentWeatherAction} from './actions/currentWeatherAction';
import {SearchForecastAction} from './actions/searchForecastAction';
import {HourlyForecastAction} from './actions/HourlyForecastAction';
import {hourlyForecastReducer} from './reducers/HourlyForecastReducer';
import {InitializationAction} from './actions/initializationAction';
import {initializationReducer} from './reducers/initializationReducer';
import {dailyForecastReducer} from './reducers/dailyForecastReducer';
import {DailyForecastAction} from './actions/dailyForecastAction';
import {searchForecastReducer} from "./reducers/searchForecastReducer";

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsType>;
export type AppActionsType =
    | CurrentWeatherAction
    | SearchForecastAction
    |HourlyForecastAction
    | InitializationAction
    | DailyForecastAction;
export type AppThunk <ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>


const rootReducer = combineReducers({
    currentWeather: currentWeatherReducer,
    hourlyWeather:hourlyForecastReducer,
    initialization: initializationReducer,
    dailyWeather: dailyForecastReducer,
    search:searchForecastReducer,
});

export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
