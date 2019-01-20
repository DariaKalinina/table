import { Dispatch } from 'redux';
import { PersonListState } from "../store/storeTypes";

export enum Key{
  SORT = 'SORT',
  LOAD = 'LOAD',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

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
    payload: { message }
});

export const errorLoadPersonList = (errorMessage: string): ErrorLoadPersonListAction => ({
    type: Key.ERROR,
    payload: { errorMessage }
});

export const successLoadPersonList = (data: PersonListState[]): SuccessLoadPersonListAction => ({
    type: Key.SUCCESS,
    payload: { data }
});

////////////////////////////////////////////////////////////////////////
export function asyncLoadPerson(pageNumber: number, sortParameter: string): (dispatch: Dispatch<PersonListActions>) => Promise<void>  {
    return async (dispatch: Dispatch<PersonListActions>) => {
        dispatch(loadPersonList('load'));
        try {
            const url = 'https://jsonplaceholder.typicode.com/users?_limit=5';
            const response = await fetch(url + '&_page=' + pageNumber + '&_sort=' + sortParameter);
            const data = await response.json(); // check for correct response
            dispatch(successLoadPersonList(data));
        } catch (e) {
            console.log('Error: ', e.code);
            dispatch(errorLoadPersonList('Что-то пошло не так...'));
        }
    }
}













