import React from 'react';
import { func } from 'prop-types';
import { Input } from 'style/Forms';
import throttleHandler from '@hocs/throttle-handler';
import { withHandlers, compose } from 'recompose';
import styled from 'styled-components';

const Search = styled(Input)`
  width: 350px;
  max-width: 100%;
`;

function Filter({ onChange }) {
  return <Search placeholder="Filter..." onChange={onChange} />;
}

Filter.propTypes = {
  onChange: func.isRequired,
};

const enhance = compose(
  withHandlers({
    onChange: ({ setFilter }) => e => {
      setFilter(e.target.value);
    },
  }),
  throttleHandler('onChange', 500),
);

export default enhance(Filter);
