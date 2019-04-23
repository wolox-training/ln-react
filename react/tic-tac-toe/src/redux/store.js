import { createBrowserHistory } from 'history';
import { createStore, combineReducers as CR, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { wrapCombineReducers, fetchMiddleware } from 'redux-recompose';

import login from './Login/reducer';

export const history = createBrowserHistory();

// Breaking in r-r v2.0: need to specify how do we merge (removed coupled seamless-immutable)
//configureMergeState((state, diff) => ({ ...state, ...diff }));

// Use this function to let invisible reducer override behavior when needed
const combineReducers = wrapCombineReducers(CR);

const reducer = combineReducers({
  router: connectRouter(history),
  form: formReducer,
  login,
  matches: (state = {}) => state
});

const middlewares = [thunk, fetchMiddleware, routerMiddleware(history)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
);
