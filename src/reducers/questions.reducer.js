import * as types from './../actions/types';
import questions from './../config/quiz-questions.json';
import _ from 'lodash';

const initialState = {
	list : [...questions],
	selectedQuestion : null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.SELECT_QUESTION: {
			let question = _.find(state.list, (qst) => {
				return qst.id == action.payload.question_id;
			});
			return {
				list : [...state.list],
				selectedQuestion: question
			}
		}
		default : {
			return {...state};
		}
	}
}