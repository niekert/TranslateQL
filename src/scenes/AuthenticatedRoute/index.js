import { connect } from 'react-redux';
import { isAuthenticated } from 'selectors/auth';
import AuthRoute from './components/AuthRoute';

function mapStateToProps(state, ownProps) {
  console.log('isAuthenticated', isAuthenticated(state));
  return {
    isAuthenticated: isAuthenticated(state),
    ...ownProps,
  };
}

export default connect(mapStateToProps)(AuthRoute);
