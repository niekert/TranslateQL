import { branch } from 'recompose';
import MutateTranslation from './components/MutateTranslation';
import updateTranslation from './hocs/updateTranslation';
import createTranslation from './hocs/createTranslation';

const enhance = branch(
  ({ translation }) => !!translation,
  updateTranslation,
  createTranslation,
);

export default enhance(MutateTranslation);
