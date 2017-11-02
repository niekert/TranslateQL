import { graphql } from 'react-apollo';
import UserApplicationsQuery from 'queries/UserApplicationsQuery';
import { compose, mapProps } from 'recompose';
import ApplicationsPage from './components/ApplicationsPage';

const enhance = compose(
  graphql(UserApplicationsQuery),
  mapProps(({ data }) => ({
    applications: data.user ? data.user.applications : [],
  })),
);

export default enhance(ApplicationsPage);
