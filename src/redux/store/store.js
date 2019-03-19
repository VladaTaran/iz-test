import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { personsReducer } from '../redusers/personsReducer';

export default () => {
    const store = createStore(
        combineReducers({
            personsList: personsReducer, 
        }),
        applyMiddleware(ReduxThunk)
    )
    return store;
}