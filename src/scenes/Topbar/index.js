import { connect } from 'react-redux';
import { logout } from 'data/auth/actions';
import withCurrentUser from 'hocs/withCurrentUser';
import { compose } from 'react-apollo';
import Topbar from './components';

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.data.auth.token,
  };
}

const enhance = compose(connect(mapStateToProps, { logout }), withCurrentUser);

export default enhance(Topbar);
