import Axios from 'axios';
import { personsListSuccess, personsListFailure } from '../actions/persons';

export function getPersons(url) {
    return (dispatch) => {
        Axios.get(url)
         .then(response => {
             dispatch(personsListSuccess(response.data))
          })
         .catch(error=>dispatch(personsListFailure(error)))
    }
}