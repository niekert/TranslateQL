import gql from 'graphql-tag';

export default gql`
  query ApplicationLanguagesQuery($applicationId: ID!) {
    Application(id: $applcationId) {
      id
      languages {
        id
        code
      }
    }
  }
`;
