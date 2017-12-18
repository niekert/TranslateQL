import { withRouter } from 'react-router';
import gql from 'graphql-tag';
import { get } from 'lodash';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { setFilter } from './actions';
import TranslationsView from './components/TranslationsView';

const QUERY_TRANSLATIONS = gql`
  query ApplicationTranslations($applicationId: ID!) {
    Application(id: $applicationId) {
      id
      translations {
        ...TranslationsViewTranslation
      }
      languages {
        id
        code
      }
    }
  }

  ${TranslationsView.fragments.translation}
`;

const mapStateToProps = (state, ownProps) => ({
  applicationId: ownProps.match.params.applicationId,
});

const enhance = compose(
  withRouter,
  connect(mapStateToProps, { setFilter }),
  graphql(QUERY_TRANSLATIONS, {
    options: ({ applicationId }) => ({
      variables: { applicationId },
    }),
    props({ data }) {
      return {
        isLoading: data.loading,
        translations: get(data, 'Application.translations', []),
        languages: get(data, 'Application.languages', []),
      };
    },
  }),
);

export default enhance(TranslationsView);
