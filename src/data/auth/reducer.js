import { createReducer } from 'redux-create-reducer';
import { SAVE_USER_LOGIN, LOGOUT } from './actions';

const initialState = {
  token: null,
  userId: null,
};

export default createReducer(initialState, {
  [SAVE_USER_LOGIN](state, action) {
    return {
      token: action.payload.token,
      userId: action.payload.id,
    };
  },
  [LOGOUT]() {
    return { ...initialState };
  },
});
