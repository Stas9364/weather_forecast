import {INITIALIZATION_TYPE, InitializationAction} from '../actions/initializationAction';

export type InitStateType = {
    isLoading: IsLoadingType
    error: null | string
    selectedLocation: string | null
}
export type IsLoadingType = 'idle' | 'loading' | 'success';

export const initState: InitStateType = {
    isLoading: 'idle',
    error: null,
    selectedLocation: null,
};

export const initializationReducer = (state: InitStateType = initState, action: InitializationAction): InitStateType => {
    switch (action.type) {
        case INITIALIZATION_TYPE.IS_LOADING:
            return {...state, isLoading: action.isLoading};
        case INITIALIZATION_TYPE.ERROR:
            return {...state, error: action.error};
        case INITIALIZATION_TYPE.SELECTED_LOCATION:
            return {...state, selectedLocation: action.value};
        default:
            return state;
    }
};


