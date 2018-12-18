export enum Key{
  SORT = 'SORT'
}

interface ISort {
  readonly type: Key.SORT;
  readonly payload: string;
}

export const sortList = (sortValue: string): ISort => ({
    type: Key.SORT,
    payload: sortValue
});



