import {connect} from 'react-redux';
import PriceLevel from './price-level.presentation';

const mapStateToProps = (state) => {
	return {
		gameStage : state.gameStage
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(PriceLevel);