import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { mapProps, compose } from 'recompose';
import LanguagePicker from './components/LanguagePicker';

const LANGUAGES_QUERY = gql`
  query AllLanguages {
    allLanguages {
      id
      name
      code
    }
  }
`;

const enhance = compose(
  graphql(LANGUAGES_QUERY),
  mapProps(({ data, ...props }) => ({
    languages: data.allLanguages,
    ...props,
  })),
);

export default enhance(LanguagePicker);
