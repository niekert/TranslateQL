import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import { NormalTile } from 'style/Tiles';
import { prop } from 'styled-tools';

const LinkTile = NormalTile.extend`
  display: block;
  margin-bottom: ${prop('theme.spacing.0')};
`.withComponent(Link);

function ApplicationTile({ id, name }) {
  return <LinkTile to={`/application/${id}`}>{name}</LinkTile>;
}

ApplicationTile.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
};

export default ApplicationTile;
