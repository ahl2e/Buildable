import {connect} from 'react-redux';
import StepsIndex from './steps_index';
import { selectAllSteps } from '../../reducers/selectors'

const mapStateToProps = (state) => {
  return {
    steps: selectAllSteps(state)
  };
};


export default connect(mapStateToProps, null)(StepsIndex);
