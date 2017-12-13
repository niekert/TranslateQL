import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';
import { NormalTile } from 'style/Tiles';
import Filter from './Filter';

const Wrapper = styled.div`
  margin-top: 2em;
`;

function TranslationsView({ setFilter }) {
  return (
    <Wrapper>
      <Filter setFilter={setFilter} />
      <NormalTile>Wow translations</NormalTile>
    </Wrapper>
  );
}

TranslationsView.propTypes = {
  setFilter: func.isRequired,
};

export default TranslationsView;
