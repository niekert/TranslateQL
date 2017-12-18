import { withRouter } from 'react-router';
import { withProps, compose } from 'recompose';

const withRouteParams = params =>
  compose(
    withRouter,
    withProps(({ match }) =>
      params.reduce(
        (result, param) => ({
          [param]: match.params[param],
          ...result,
        }),
        {},
      ),
    ),
  );

export default withRouteParams;
