import questions from './../config/quiz-questions.json';

const initialState = {
	list : [...questions]
};

export default (state = initialState, action) => {
	return {...state};
}