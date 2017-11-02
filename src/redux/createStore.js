import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import persistState from 'redux-localstorage';
import { isDev } from 'util/env';
import createReducers from './createReducers';

const localStorageSlicer = () => state => ({
  data: state.data,
});

export default function createReduxStore() {
  const composeEnhancers =
    (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // eslint-disable-line

  const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware),
    persistState('', {
      slicer: localStorageSlicer,
    }),
  );

  const reducers = createReducers();
  return createStore(reducers, {}, enhancer);
}
