import {Dispatch} from 'redux';
import {PersonListState} from "../store/storeTypes";

export enum Key{
  SORT = 'SORT',
  LOAD = 'LOAD',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}
///////////////////////////////////////////////////////
export interface SortListAction {
    readonly payload?: string;
    readonly type: Key.SORT;
}

export interface ErrorLoadPersonListAction {
    readonly payload: {
        errorMessage: string
    };
    readonly type: Key.ERROR;
}

export interface SuccessLoadPersonListAction {
    readonly payload: {
        data: PersonListState[]
    };
    readonly type: Key.SUCCESS;
}

export interface LoadPersonListAction {
    readonly type: Key.LOAD;
    readonly payload: {
        message: string
    };
}

export type PersonListActions = LoadPersonListAction | SuccessLoadPersonListAction | ErrorLoadPersonListAction;

////////////////////////////////////////////////////////////////////////
export const sortProductList = (sortValue: string): SortListAction => ({
    type: Key.SORT,
    payload: sortValue
});

export const loadPersonList = (message: string): LoadPersonListAction => ({
    type: Key.LOAD,
    payload: {message}
});

export const errorLoadPersonList = (errorMessage: string): ErrorLoadPersonListAction => ({
    type: Key.ERROR,
    payload: {errorMessage}
});

export const successLoadPersonList = (data: PersonListState[]): SuccessLoadPersonListAction => ({
    type: Key.SUCCESS,
    payload: {data}
});

/////////////////////////////////////////////////////////////
export function asyncLoadPerson(): (dispatch: Dispatch<PersonListActions>) => Promise<void>  {
    return async (dispatch: Dispatch<PersonListActions>) => {
        dispatch(loadPersonList('load'));
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            dispatch(successLoadPersonList(data));
        } catch (e) {
            console.log('Error: ', e);
            dispatch(errorLoadPersonList('Что-то пошло не так...'));
        }
    }
}













