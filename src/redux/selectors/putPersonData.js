import Axios from 'axios';

export default function putPersonData (state, changeInfo) {
    const {id, name, email, funds, city, phone} = state;
        const newPersonInfo = {
            id,
            name,
            email,
            funds,
            city,
            phone
        };
        Axios.put(`http://localhost:8080/update/${id}`,newPersonInfo)
            .then(response => { 
                response.statusText === 'OK' && changeInfo(response.data)
            })
            .catch(e => console.error(e) )
}