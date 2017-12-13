import { combineReducers } from 'redux';
import dataReducer from 'data/reducer';
import translationsViewReducer from 'scenes/TranslationsView/reducer';

export default function createReducers() {
  return combineReducers({
    data: dataReducer,
    translationsView: translationsViewReducer,
  });
}
