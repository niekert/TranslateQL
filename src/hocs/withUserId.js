import { connect } from 'react-redux';

const mapStateToProps = ({ data }) => ({ userId: data.auth.userId });

export default connect(mapStateToProps);
