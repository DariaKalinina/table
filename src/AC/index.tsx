export enum Key{
  SORT = 'SORT'
}

export interface SortListAction {
    readonly type: Key.SORT;
    readonly payload: string;
}

export const sortProductList = (sortValue: string): SortListAction => ({
    type: Key.SORT,
    payload: sortValue
});



