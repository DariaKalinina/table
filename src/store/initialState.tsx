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
    personList: [
        {
            id: 1,
            name: 'q',
            username: 'q',
            email: 'q',
            address: {
                street: 'q',
                suite: 'q',
                city: 'q',
                zipcode: 'q',
                geo: {
                    lat: 'q',
                    lng: 'q'
                }
            },
            phone: 'q',
            website: 'q',
            company: {
                name: 'q',
                catchPhrase: 'q',
                bs: 'q'
            }
        },
        {
            id: 2,
            name: 'w',
            username: 'w',
            email: 'w',
            address: {
                street: 'w',
                suite: 'w',
                city: 'w',
                zipcode: 'w',
                geo: {
                    lat: 'w',
                    lng: 'w'
                }
            },
            phone: 'w',
            website: 'w',
            company: {
                name: 'w',
                catchPhrase: 'w',
                bs: 'w'
            }
        }
    ],
};

export default defaultState;
