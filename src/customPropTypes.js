import { shape, string } from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const postProp = shape({
  id: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
});
