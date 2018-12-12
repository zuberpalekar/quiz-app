import {applyMiddleware, createStore} from 'redux';
import {reducers} from '../reducers/index';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to AsyncStorage for react native

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default function configureStore() {

	const middlewares = [];
	middlewares.push(logger);

	const store = createStore(
		persistedReducer,
		applyMiddleware(...middlewares)
	);

	let persistor = persistStore(store);

	return {store, persistor};

}
