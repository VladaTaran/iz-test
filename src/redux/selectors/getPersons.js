import Axios from 'axios';
import { personsListSuccess, personsListFailure } from '../actions/persons';

const getPersons = (limit, offset, name, city, funds, phone) => {
    const url = 'http://localhost:8080/';
    return (dispatch) => {
        Axios.get(url, {
            params: {
                limit,
                offset,
                name,
                city,
                funds,
                phone
            }
        })
        .then(response => {
            dispatch(personsListSuccess(response.data.data, response.data.count, name, city, funds, phone))
        })
        .catch(error=>dispatch(personsListFailure(error)))
    }
}
export default getPersons;