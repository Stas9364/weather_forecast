import {INITIALIZATION_TYPE, InitializationAction} from '../actions/InitializationAction';

export type InitStateType = {
    isLoading: IsLoadingType
    error: null | string
}
export type IsLoadingType = 'idle' | 'loading' | 'success';

export const initState: InitStateType = {
    isLoading: 'idle',
    error: null
};

export const initializationReducer = (state: InitStateType = initState, action: InitializationAction): InitStateType => {
    switch (action.type) {
        case INITIALIZATION_TYPE.IS_LOADING:
            return {...state, isLoading: action.isLoading};
        case INITIALIZATION_TYPE.ERROR: {
            return {...state, error: action.error};
        }
        default:
            return state;
    }
};


