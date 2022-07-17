import {IsLoadingType} from '../reducers/initializationReducer';

export enum INITIALIZATION_TYPE {
    IS_LOADING = 'IS_LOADING',
    ERROR = 'ERROR'
}

export type InitializationAction =
    | ReturnType<typeof isLoadingAC>
    | ReturnType<typeof errorAC>

export const isLoadingAC = (isLoading: IsLoadingType) => ({
    type: INITIALIZATION_TYPE.IS_LOADING, isLoading
} as const);

export const errorAC = (error: string | null) => ({
    type: INITIALIZATION_TYPE.ERROR, error
} as const);

