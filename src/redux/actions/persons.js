export function personsListSuccess(persons, count, name, city, funds, phone) {
    return {
        type: 'PERSONS_LIST_DATA_SUCCESS',
        persons,
        count,
        name, 
        city, 
        funds,
        phone
    }
};

export function personsListFailure(error) {
    return {
        type: 'PERSONS_LIST_DATA_FAILURE',
        error
    }
};

export function editPerson ( id, updates ) {
    return {
        type: 'EDIT_PERSON_INFO',
        id, 
        updates
    }
}

