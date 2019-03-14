function searchReducer (state = {text: ''}, action) {
    return action.type === 'SEARCH' ? {text: action.text} : state;
}

export default searchReducer;