import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
import { ADD_COMMENT } from './types';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const localStorageMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action);
    if (action.type === ADD_COMMENT) {
      const { comments } = getState();
      localStorage.setItem('comments', JSON.stringify(comments));
    }
    return result;
  };

const store = createStore(
  rootReducer,
  {
    characters: [],
    comments: JSON.parse(localStorage.getItem('comments')) || [],
  },
  compose(applyMiddleware(thunk, localStorageMiddleware), devTools)
);

export default store;
