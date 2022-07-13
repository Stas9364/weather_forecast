import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {currentWeatherReducer} from './reducers/currentWeatherReducer';
import {CurrentWeatherAction} from './actions/currentWeatherAction';
import {fiveDaysForecastReducer} from './reducers/fiveDaysForecastReducer';
import {FiveDaysForecastAction} from './actions/fiveDaysForecastAction';

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsType>;
export type AppActionsType = CurrentWeatherAction | FiveDaysForecastAction;
export type AppThunk <ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>


const rootReducer = combineReducers({
    currentWeather: currentWeatherReducer,
    fiveDaysForecast: fiveDaysForecastReducer
});

export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
