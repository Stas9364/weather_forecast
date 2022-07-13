import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {currentWeatherReducer} from './reducers/currentWeatherReducer';
import {CurrentWeatherAction} from './actions/currentWeatherAction';
import {fiveDaysForecastReducer} from './reducers/fiveDaysForecastReducer';
import {FiveDaysForecastAction} from './actions/fiveDaysForecastAction';
import {thirtyDaysForecastReducer} from "./reducers/ThirtyDaysForecastReducer";
import {ThirtyDaysForecastAction} from "./actions/ThirtyDaysForecastAction";

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsType>;
export type AppActionsType = CurrentWeatherAction | FiveDaysForecastAction |ThirtyDaysForecastAction;
export type AppThunk <ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>


const rootReducer = combineReducers({
    currentWeather: currentWeatherReducer,
    fiveDaysForecast: fiveDaysForecastReducer,
    thirtyDaysForecast:thirtyDaysForecastReducer
});

export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
