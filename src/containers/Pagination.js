import { connect } from 'react-redux';
import getSearchedPersons from '../redux/selectors/getSearchedPersons';
import { getPersons } from '../redux/selectors/getPersons';
import Pagination from '../components/Pagination';


const mapStateToProps = ({personsList: {persons, count, error }, search: {text}}) => ({
    persons: getSearchedPersons(persons, text),
    count
  }); 
   
const mapDispatchToProps = (dispatch) => ({
  getPersons: (limit, offset) => dispatch(getPersons(limit, offset))
})
  export default connect(mapStateToProps, mapDispatchToProps)(Pagination);