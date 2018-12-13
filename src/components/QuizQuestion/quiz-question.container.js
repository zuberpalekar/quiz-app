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

	};
};


export default connect(mapStateToProps, mapDispatchToProps)(QuizQuestion);