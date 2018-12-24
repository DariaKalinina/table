import {Action, ActionCreator} from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import {PersonListState } from "../store/storeTypes";

interface PersonTableStore {
    personList: PersonListState[],
    loadPersonList: () => ActionCreator<Action>,
    successLoadPersonList: (data: PersonListState[]) => ActionCreator<Action>,
    errorLoadPersonList: (errorMessage: string) => ActionCreator<Action>,
}

export enum Key{
  SORT = 'SORT',
  LOAD = 'LOAD',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

export interface SortListAction {
    readonly type: Key.SORT;
    readonly payload?: string;
}

export interface LoadPersonListAction {
    readonly type: Key.LOAD | Key.ERROR | Key.SUCCESS;
    readonly payload: string | PersonListState[] | undefined;
}
//
// export interface ErrorLoadPersonListAction {
//     readonly type: Key.ERROR;
//     readonly payload: string;
// }
//
// export interface SuccessLoadPersonListAction {
//     readonly type: Key.SUCCESS;
//     readonly payload: PersonListState[]
// }

export const sortProductList: ActionCreator<Action> = (sortValue: string) => ({
    type: Key.SORT,
    payload: sortValue
});

export const loadPersonList: ActionCreator<Action> = () => ({
    type: Key.LOAD,
    payload: []
});

export const errorLoadPersonList: ActionCreator<Action> = (errorMessage: string) => ({
    type: Key.ERROR,
    payload: errorMessage
});

export const successLoadPersonList: ActionCreator<Action> = (data: PersonListState[]) => ({
    type: Key.SUCCESS,
    payload: data
});


export const asyncLoadPerson = () => {
    console.log('зашли');
    return async (dispatch: ThunkDispatch<PersonTableStore, void, Action>) => {
        dispatch(loadPersonList);
        console.log('пытаемся');
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            console.log('response', response);
            const data = await response.json();
            console.log('data', data);
            dispatch(successLoadPersonList(data));
        } catch (e) {
            console.log('Error: ', e);
            dispatch(errorLoadPersonList('Что-то пошло не так...'));
        }
    }
};





