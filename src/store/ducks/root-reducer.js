import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cityReducer from './city';
import placeReducer from './place';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['reducer'],
};

const rootReducer = combineReducers({
    city: cityReducer,
    place: placeReducer,
});

export default persistReducer(persistConfig, rootReducer);
