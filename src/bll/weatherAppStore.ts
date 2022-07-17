import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {currentWeatherReducer} from './reducers/currentWeatherReducer';
import {CurrentWeatherAction} from './actions/currentWeatherAction';
import {FiveDaysForecastAction} from './actions/fiveDaysForecastAction';
import {HourlyForecastAction} from "./actions/HourlyForecastAction";
import {hourlyForecastReducer} from "./reducers/HourlyForecastReducer";

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsType>;
export type AppActionsType = CurrentWeatherAction | FiveDaysForecastAction |HourlyForecastAction;
export type AppThunk <ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>


const rootReducer = combineReducers({
    currentWeather: currentWeatherReducer,
    hourlyWeather:hourlyForecastReducer,
});

export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
