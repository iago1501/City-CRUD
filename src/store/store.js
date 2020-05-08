import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import multi from 'redux-multi'
import { persistStore } from 'redux-persist';

import rootReducer from './ducks/root-reducer';

const middleWares = [logger, multi];

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
export const persistor = persistStore(store);

export default { store, persistor };
