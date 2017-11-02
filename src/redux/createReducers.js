import { combineReducers } from 'redux';
import postsPageReducer from 'scenes/PostsPage/reducer';
import dataReducer from 'data/reducer';

export default function createReducers(apolloClient) {
  return combineReducers({
    postPage: postsPageReducer,
    apollo: apolloClient.reducer(),
    data: dataReducer,
  });
}
