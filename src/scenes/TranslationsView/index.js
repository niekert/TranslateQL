import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { setFilter } from './actions';
import TranslationsView from './components/TranslationsView';

const mapStateToProps = ({ translationsView }, ownProps) => {
  console.log('ownProps', ownProps);

  return {};
};

const enhance = compose(withRouter, connect(mapStateToProps, { setFilter }));

export default enhance(TranslationsView);
