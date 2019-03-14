import { connect } from 'react-redux';
import PersonCard from '../components/PersonCard';
import { editPerson } from '../redux/actions/persons';

const mapStateToProps = (state, props) => ({
    person: state.personsList.persons.find(person => person.id === props.id) 
  });
  
  const mapDispatchToProps = (dispatch) => ({
    editPerson: (id, person) => dispatch(editPerson(id, person))
  });

export default connect(mapStateToProps, mapDispatchToProps)(PersonCard);

