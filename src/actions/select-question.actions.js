import * as types from './types';

export const selectQuestion = (question_id) => {
	return {
		type : types.SELECT_QUESTION,
		payload: {
			question_id
		}
	}
};

export const questionAnswered = (question, isCorrect) => {
	return {
		type : isCorrect?  types.CORRECT_ANSWER : types.WRONG_ANSWER,
		payload: {
			question
		}
	}
};