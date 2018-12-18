import {IItemStoreState, IStoreState} from "../store/IStoreState";

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
        state: IItemStoreState[] = defaultState.list
    ) {
    // const {type} = action;
    //
    // switch (type) {
    //
    //     case 'TEST': {
    //         console.log('AC is working!!!!!');
    //         return state;
    //     }
    // }

    return state
}