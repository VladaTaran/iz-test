const initialState = {
    persons: [],
    count: 0,
    error: false,
    name: '',
    city: '',
    funds: '',
    phone: ''
}

export function personsReducer (state = initialState, action) {
    switch(action.type) {
        case 'PERSONS_LIST_DATA_SUCCESS':
            return {
                ...state,
                persons: action.persons,
                count: action.count,
                name: action.name,
                city: action.city,
                funds: action.funds,
                phone: action.phone
            };
        case 'PERSONS_LIST_DATA_FAILURE': 
            return {
                ...state,
                error: true
            }
        case 'EDIT_PERSON_INFO':
            const result = state.persons.map(person => {
                if ( person.id === action.id ) {
                    return {
                        ...person,
                        ...action.updates
                    }
                } else {
                    return person
                }
            });
            return {
                ...state,
                persons: result
            };
        default: 
            return state
    }
}