import { createReducer } from 'redux-create-reducer';
import { SET_FILTER } from './actions';

const initialState = {
  filter: '',
};

export default createReducer(initialState, {
  [SET_FILTER](state, action) {
    return {
      ...state,
      filter: action.value,
    };
  },
});
