import { graphql } from 'react-apollo';
import { compose, mapProps } from 'recompose';
import gql from 'graphql-tag';
import ImportTranslationsDialog from './components/ImportTranslationsDialog';

const IMPORT_TRANSLATIONS = gql`
  mutation importTranslations(
    $applicationId: ID!
    $fileContents: String!
    $languageId: ID!
  ) {
    importTranslations(
      applicationId: $applicationId
      fileContents: $fileContents
      languageId: $languageId
    ) {
      translations
      errors
    }
  }
`;

const enhance = compose(
  mapProps(({ match }) => ({
    applicationId: match.params.applicationId,
    url: match.url,
  })),
  graphql(IMPORT_TRANSLATIONS, {
    props({ ownProps, mutate }) {
      return {
        importFile(fileContents, languageId) {
          return mutate({
            variables: {
              applicationId: ownProps.applicationId,
              languageId,
              fileContents,
            },
          });
        },
      };
    },
  }),
);

export default enhance(ImportTranslationsDialog);
