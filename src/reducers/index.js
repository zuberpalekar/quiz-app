import {combineReducers} from 'redux';
import appStateReducer from './app-state.reducer.js';


export const reducers = combineReducers(
	{
		appState : appStateReducer
	}
);