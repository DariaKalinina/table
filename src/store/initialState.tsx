import {Store} from "./storeTypes";

const defaultState: Store = {
    productList: [
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
    ],
    personList: [],
};

export default defaultState;
