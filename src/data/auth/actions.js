import { GRAPHQL_AUTH_TOKEN_KEY } from 'app-constants';

export const SAVE_USER_LOGIN = 'SAVE_USER_LOGIN';
export const LOGOUT = 'LOGOUT';

export function saveUserLogin({ token, id }) {
  window.localStorage.setItem(GRAPHQL_AUTH_TOKEN_KEY, token);

  return {
    type: SAVE_USER_LOGIN,
    payload: {
      token,
      id,
    },
  };
}

export function logout() {
  window.localStorage.removeItem(GRAPHQL_AUTH_TOKEN_KEY);

  return {
    type: LOGOUT,
  };
}
