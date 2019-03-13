function searchReducer (state = {text: ''}, action) {
    return action.type === 'SEARCH' ? {text: action.text} : state
    // switch(action.type) {
    //     case 'SEARCH': 
    //         return {text: action.text};
    //     default: {
    //         return state
    //     }

    // }
}

export default searchReducer;