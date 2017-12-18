import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import withRouteParams from 'hocs/withRouteParams';
import gql from 'graphql-tag';

const CREATE_TRANSLATION_MUTATION = gql`
  mutation createTranslation($applicationId: ID!, $key: String!) {
    createTranslation(applicationId: $applicationId, key: $key) {
      id
    }
  }
`;

// TODO: USE TRANSLATION FRAGMENT
const CREATE_TRANSLATION_VALUE_MUTATION = gql`
  mutation createTranslationValue(
    $translationId: ID!
    $languageId: ID!
    $value: String!
  ) {
    createTranslationValue(
      translationId: $translationId
      languageId: $languageId
      value: $value
    ) {
      id
    }
  }
`;

const createTranslation = graphql(CREATE_TRANSLATION_MUTATION, {
  props({ ownProps, mutate }) {
    return {
      submitTranslation({ key }) {
        return mutate({
          variables: {
            applicationId: ownProps.applicationId,
            key,
          },
        });
      },
    };
  },
});

const createTranslationValue = graphql(CREATE_TRANSLATION_VALUE_MUTATION, {
  props({ mutate }) {
    return {
      submitTranslationValue({ translationId, languageId, value }) {
        return mutate({ variables: { translationId, languageId, value } });
      },
    };
  },
});

export default compose(
  withRouteParams(['applicationId']),
  createTranslation,
  createTranslationValue,
);
