export const SET_FILTER = 'translationsview/SET_FILTER';

export function setFilter(value) {
  return {
    type: SET_FILTER,
    value,
  };
}
