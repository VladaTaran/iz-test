export function personsListSuccess(persons) {
    return {
        type: 'PERSONS_LIST_DATA_SUCCESS',
        persons
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

