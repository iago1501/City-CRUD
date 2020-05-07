import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cityReducer from './city';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['reducer'],
};

const rootReducer = combineReducers({
    city: cityReducer,
});

export default persistReducer(persistConfig, rootReducer);
