import {PersonListState, } from "../store/storeTypes";
import {Key, LoadPersonListAction} from "../AC";

const defaultState: PersonListState[] = [
    {
        id: 0,
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            }
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    }
 ];

export default function personList(
        state: PersonListState[] = defaultState,
        action: LoadPersonListAction
    ) {
    const {type, payload} = action;
    let newState = [...state];

    switch (type) {
        case Key.ERROR:
            console.log('ERROR payload', type, payload);
            return newState;
        case Key.LOAD:
            console.log('LOAD payload', type, payload);
            return newState;

        case Key.SUCCESS:
            console.log('SUCCESS payload', type, payload);
            return newState;


    }

    return state
}






