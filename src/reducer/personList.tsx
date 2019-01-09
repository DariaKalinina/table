import {Key} from "../AC";
import defaultState from "../store/initialState";
import {PersonListState} from "../store/storeTypes";

export default function personList(
        state = defaultState.personList,
        action: {
            type: string,
            payload: {errorMessage: string, message: string, data: PersonListState[]}
        }
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
            console.log('SUCCESS payload', type, newState, payload.data);
            newState = [...payload.data];
            return newState;
    }

    return state
}






