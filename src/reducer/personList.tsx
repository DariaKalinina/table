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
            return newState;

        case Key.LOAD:
            return newState;

        case Key.SUCCESS:
            newState = [...payload.data];
            return newState;
    }

    return state
}






