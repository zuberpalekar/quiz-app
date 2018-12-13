import {connect} from 'react-redux';
import QuizQuestion from './quiz-question.presentation';
import {ActionCreators} from "../../actions/index";

const mapStateToProps = (state) => {
	return {
		currentQuestion : state.questions.selectedQuestion
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		questionAnswered : (question, isCorrect) => dispatch(ActionCreators.questionAnswered(question, isCorrect))
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(QuizQuestion);