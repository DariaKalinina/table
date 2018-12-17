const defaultState = [
    {
        'id': 1,
        'weight': 0.15,
        'kkal': 1455.15,
        'title': 'apple',
        'importer': 'Russia',
        'exist': true,
    },
    {
        'id': 2,
        'weight': 0.16,
        'kkal': 135.15,
        'title': 'carrot',
        'importer': 'Russia',
        'exist': false,
    },
    {
        'id': 3,
        'weight': 0.17,
        'kkal': 1345.15,
        'title': 'orange',
        'importer': 'Brazil',
        'exist': true,
    },
];

export default function list(state = defaultState, action: any) {
    const {type} = action;

    switch (type) {

        case 'TEST': {
            console.log('AC is working!!!!!');
            return state;
        }
    }

    return state
}