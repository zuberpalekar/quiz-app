import * as types from './types';

export const selectQuestion = (question_id) => {
	return {
		type : types.SELECT_QUESTION,
		payload: {
			question_id
		}
	}
};