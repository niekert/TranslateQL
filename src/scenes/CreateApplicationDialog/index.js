import { graphql, compose } from 'react-apollo';
import withUserId from 'hocs/withUserId';
import gql from 'graphql-tag';
import CreateApplicationDialog from './components/CreateApplicationDialog';

const CREATE_APPLICATION_MUTATION = gql`
  mutation createApplicationMutation(
    $name: String!
    $userId: ID!
    $baseLanguageId: ID!
  ) {
    createApplication(
      name: $name
      userId: $userId
      baseLanguageId: $baseLanguageId
    ) {
      id
      name
      user {
        id
      }
    }
  }
`;

const enhance = compose(
  graphql(CREATE_APPLICATION_MUTATION, {
    name: 'createApplicationMutation',
  }),
  withUserId,
);

export default enhance(CreateApplicationDialog);
