import {IItemStoreState, IStoreState} from "../store/IStoreState";
import {Key} from "../AC";

interface ISort {
    readonly type: Key.SORT;
    readonly payload: string;
};

const sortByAmount = (a: IItemStoreState, b: IItemStoreState) => a.amount - b.amount;

const sortById = (a: IItemStoreState, b: IItemStoreState) => a.id - b.id;

const sortByWeight = (a: IItemStoreState, b: IItemStoreState) =>  a.weight - b.weight;

const sortByTitle = (a: IItemStoreState, b: IItemStoreState) => {
    const objectA = a.title.toUpperCase();
    const objectB = b.title.toUpperCase();

    if (objectA < objectB) {
        return -1;
    }
    if (objectA > objectB) {
        return 1;
    }

    return 0;
};

const sortByImporter = (a: IItemStoreState, b: IItemStoreState) => {
    const objectA = a.importer.toUpperCase();
    const objectB = b.importer.toUpperCase();

    if (objectA < objectB) {
        return -1;
    }
    if (objectA > objectB) {
        return 1;
    }

    return 0;
};

const sortByExist = (a: IItemStoreState, b: IItemStoreState) => {
    const objectA = a.exist ? 1 : 0;
    const objectB = b.exist ? 1 : 0;

    return objectA - objectB;
};

const defaultState: IStoreState = {
    list: [
        {
            amount: 1455.15,
            exist: true,
            id: 1,
            importer: 'Russia',
            title: 'apple',
            weight: 0.15,
        },
        {
            amount: 135.15,
            exist: false,
            id: 2,
            importer: 'Russia',
            title: 'carrot',
            weight: 0.16,
        },
        {
            amount: 1345.15,
            exist: true,
            id: 3,
            importer: 'Brazil',
            title: 'orange',
            weight: 0.17,
        },
    ]
}

export default function list(
        state: IItemStoreState[] = defaultState.list,
        action: ISort
    ) {
    const {type, payload} = action;

    switch (type) {
        case 'SORT':
            let sortedList = state;
            switch (payload) {
                case 'title':
                    sortedList = state.sort(sortByTitle);
                    break;

                case 'importer':
                    sortedList = state.sort(sortByImporter);
                    break;

                case 'amount':
                    sortedList = state.sort(sortByAmount);
                    break;

                case 'id':
                    sortedList = state.sort(sortById);
                    break;

                case 'weight':
                    sortedList = state.sort(sortByWeight);
                    break;

                case 'exist':
                    sortedList = state.sort(sortByExist);
                    break;
            }
            return sortedList;
    }

    return state
}






