import Axios from 'axios';
import { personsListSuccess, personsListFailure } from '../actions/persons';

export function getPersons(limit, offset) {
    const url = `http://localhost:8080/?limit=${limit}&offset=${offset}`;
    return (dispatch) => {
        Axios.get(url)
         .then(response => {
             dispatch(personsListSuccess(response.data))
          })
         .catch(error=>dispatch(personsListFailure(error)))
    }
}