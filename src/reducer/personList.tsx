import {Key, PersonListActions} from "../AC";
import defaultState from "../store/initialState";

export default function personList(
        state = defaultState.personList,
        action: PersonListActions
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
            console.log('SUCCESS payload', type, newState, payload);
            return newState;
    }

    return state
}






