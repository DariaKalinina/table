import { ProductListState } from "../store/storeTypes";
import { Key, SortListAction } from "../AC";
import defaultState from "../store/initialState";

type sortFunction = (a: ProductListState, b: ProductListState) => number;

const sortListLikeNumber = (value: string): sortFunction  => {
    return function(a: ProductListState, b: ProductListState): number {
        return a[value] - b[value];
    }
};

const sortListLikeString = (value: string): sortFunction  => {
    return function(a: ProductListState, b: ProductListState): number {
        const objectA = a[value].toLowerCase();
        const objectB = b[value].toLowerCase();

        if (objectA < objectB) {
            return -1;
        }
        if (objectA > objectB) {
            return 1;
        }

        return 0;
    }
};

const sortListLikeBoolean = (value: string): sortFunction  => {
    return function(a: ProductListState, b: ProductListState): number {
        const objectA = a[value] ? 0 : 1;
        const objectB = b[value] ? 0 : 1;

        return objectA - objectB;
    }
};

export default function productList(
        state = defaultState.productList,
        action: SortListAction
    ) {
    const {type, payload} = action;
    let newState = [...state];

    switch (type) {
        case Key.SORT:
            if (payload === 'title' || payload === 'importer') {
                newState = newState.sort(sortListLikeString(payload));
            } else if (payload === 'amount' || payload === 'id' || payload === 'weight') {
                newState = newState.sort(sortListLikeNumber(payload));
            } else if (payload === 'exist') {
                newState = newState.sort(sortListLikeBoolean(payload));
            }

            return newState;

    }

    return state
}






