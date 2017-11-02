import { graphql, compose } from 'react-apollo';
import UserApplicationsQuery from 'queries/UserApplicationsQuery';
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
    }
  }
`;

const update = (store, { data: { createApplication } }) => {
  const queryData = store.readQuery({ query: UserApplicationsQuery });

  queryData.user.applications.push(createApplication);

  store.writeQuery({ query: UserApplicationsQuery, data: queryData });
};

const mutation = graphql(CREATE_APPLICATION_MUTATION, {
  props({ ownProps, mutate }) {
    return {
      submit({ name, baseLanguageId }) {
        return mutate({
          variables: {
            userId: ownProps.userId,
            name,
            baseLanguageId,
          },
          update,
        });
      },
    };
  },
});

const enhance = compose(withUserId, mutation);

export default enhance(CreateApplicationDialog);
