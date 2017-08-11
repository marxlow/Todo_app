import {applyMiddleware, createStore} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools;

const initStore = () => {
  return createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(logger, thunk),
    )
  );
}

export default initStore
