export enum Key{
  SORT = 'SORT'
}

export type ISortFunction = (sortValue: string) => void;

export interface ISort {
    readonly type: Key.SORT;
    readonly payload: string;
}

export const sortList = (sortValue: string): ISort => ({
    type: Key.SORT,
    payload: sortValue
});



