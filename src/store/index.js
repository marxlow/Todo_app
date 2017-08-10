import {applyMiddleware, createStore} from 'redux';

import logger from 'redux-logger';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const initStore = () => {
  return createStore(
    reducer,
    applyMiddleware(logger, thunk),
  );
}

export default initStore
