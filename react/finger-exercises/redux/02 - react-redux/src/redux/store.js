import { createStore, compose, combineReducers } from 'redux';

import books from './book/reducer';
import shoppingCart from './shoppingCart/reducer';

const rootReducers = combineReducers({books, shoppingCart});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(rootReducers, composeEnhancers());
