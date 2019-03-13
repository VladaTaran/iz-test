import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { personsReducer } from '../redusers/personsReducer';
import searchReducer from '../redusers/searchReducer';

export default () => {
    const store = createStore(
        combineReducers({
            personsList: personsReducer,
            search: searchReducer
        }),
        applyMiddleware(ReduxThunk)
    )
    return store;
}