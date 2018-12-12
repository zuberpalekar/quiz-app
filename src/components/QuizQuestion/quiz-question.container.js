import {connect} from 'react-redux';
import QuizQuestion from './quiz-question.presentation';

const mapStateToProps = (state) => {
	return {
		currentQuestion : state.questions.list[0]
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(QuizQuestion);