import {IsLoadingType} from '../reducers/initializationReducer';

export enum INITIALIZATION_TYPE {
    IS_LOADING = 'IS_LOADING',
    ERROR = 'ERROR',
    SELECTED_CITY = 'SELECTED_CITY'
}

export type InitializationAction =
    | ReturnType<typeof isLoadingAC>
    | ReturnType<typeof errorAC>
    | ReturnType<typeof selectedValueAC>

export const isLoadingAC = (isLoading: IsLoadingType) => ({
    type: INITIALIZATION_TYPE.IS_LOADING, isLoading
} as const);

export const errorAC = (error: string | null) => ({
    type: INITIALIZATION_TYPE.ERROR, error
} as const);

export const selectedValueAC = (value: string | null) => ({
    type: INITIALIZATION_TYPE.SELECTED_CITY, value
} as const);

