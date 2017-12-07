import { graphql } from 'react-apollo';
import { compose, mapProps } from 'recompose';
import gql from 'graphql-tag';
import ImportTranslationsDialog from './components/ImportTranslationsDialog';

const ADD_TRANSLATION = gql`
  mutation addTranslation(
    $key: String!
    $applicationId: ID!
    $languageId: ID!
    $value: String!
  ) {
    createTranslation(
      applicationId: $applicationId
      key: $key
      values: [{ languageId: $languageId, value: $value }]
    ) {
      id
    }
  }
`;

const enhance = compose(
  mapProps(({ match }) => ({
    applicationId: match.params.applicationId,
  })),
  graphql(ADD_TRANSLATION, {
    props({ ownProps, mutate }) {
      console.log('app id', ownProps.applicationId);
      return {
        importFile({ json }) {
          return mutate({
            variables: {
              applicationId: ownProps.applicationId,
            },
          });
        },
      };
    },
  }),
);

export default ImportTranslationsDialog;
