import { connect } from 'react-redux';
import getPersons from '../redux/selectors/getPersons';
import Pagination from '../components/Pagination';

const mapStateToProps = ({personsList: {persons, count, error, name, city, funds, phone }}) => ({ 
      persons,
      count,
      name,
      city,
      funds,
      phone
}); 
   
const mapDispatchToProps = (dispatch) => ({
  getPersons: (limit, offset, name, city, funds, phone) => dispatch(getPersons(limit, offset, name, city, funds, phone))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

 