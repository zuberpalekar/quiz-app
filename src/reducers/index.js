import {combineReducers} from 'redux';
import appStateReducer from './app-state.reducer.js';
import questionsReducer from './questions.reducer';
import gameStageReducer from './game-stage.reducer';


export const reducers = combineReducers(
	{
		appState : appStateReducer,
		questions: questionsReducer,
		gameStage : gameStageReducer
	}
);