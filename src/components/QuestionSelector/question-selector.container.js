import {connect} from 'react-redux';
import QuestionSelector from './question-selector.presentation';
import {ActionCreators} from "../../actions/index";

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		selectQuestion: (question_id) => {dispatch(ActionCreators.selectQuestion(question_id))}
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(QuestionSelector);