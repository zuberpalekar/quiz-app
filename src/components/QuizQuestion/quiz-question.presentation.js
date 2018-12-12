import React, {Component} from 'react';
import styles from './styles.css';
import {Button} from 'reactstrap';


export default class QuizQuestion extends Component {

	constructor(props) {
		super(props);
	}

	onOptionSelect = (value) => {
		console.log(value);
	};

	render() {
		return (
			<div className={'questionContainer'}>
				<h1>
					{this.props.currentQuestion.question}
				</h1>
				<div className={'row'}>
					<div className={'col-md-6'}>
						<Button onClick={() => this.onOptionSelect('answer_a')} className={''}>A .{this.props.currentQuestion.answer_a}</Button>
					</div>
					<div className={'col-md-6'}>
						<Button onClick={() => this.onOptionSelect('answer_b')} className={''}>B. {this.props.currentQuestion.answer_b}</Button>
					</div>

				</div>
				<div className={'row marginTop'}>
					<div className={'col-md-6'}>
						<Button onClick={() => this.onOptionSelect('answer_c')} className={''}>C. {this.props.currentQuestion.answer_c}</Button>
					</div>
					<div className={'col-md-6'}>
						<Button onClick={() => this.onOptionSelect('answer_d')} className={''}>D. {this.props.currentQuestion.answer_d}</Button>
					</div>
				</div>
			</div>
		);
	}
}