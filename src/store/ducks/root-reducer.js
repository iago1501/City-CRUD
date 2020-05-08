import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cityReducer from './city';
import placeReducer from './place';
import formReducer from './form';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['city', 'place'],
};

const rootReducer = combineReducers({
    city: cityReducer,
    place: placeReducer,
    form: formReducer,
});

export default persistReducer(persistConfig, rootReducer);
