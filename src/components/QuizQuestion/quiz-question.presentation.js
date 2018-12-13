import React, {Component} from 'react';
import styles from './styles.css';
import {Button} from 'reactstrap';


export default class QuizQuestion extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedAnswer : '',
			isCorrect : false,
		}
	}

	onOptionSelect = (value) => {
		console.log(value);
		let isCorrect = this.props.currentQuestion.correct_answer === value;
		this.setState({
			selectedAnswer: value,
			isCorrect: isCorrect
		});
	};

	render() {
		return (
			<div className={'questionContainer'}>
				{
					this.props.currentQuestion &&
						<div>
							<h1>
								{this.props.currentQuestion.question}
							</h1>
							<div className={'row'}>
								<div className={'col-md-6'}>
									<Button onClick={() => this.onOptionSelect('answer_a')}
											color={this.state.selectedAnswer && this.state.selectedAnswer === 'answer_a' ? this.state.isCorrect  ? 'success' : 'danger' : 'secondary'}
									>
											A .{this.props.currentQuestion.answer_a}
									</Button>
								</div>
								<div className={'col-md-6'}>
									<Button
										onClick={() => this.onOptionSelect('answer_b')}
										color={this.state.selectedAnswer && this.state.selectedAnswer === 'answer_b' ? this.state.isCorrect  ? 'success' : 'danger' : 'secondary'}
									>
										B. {this.props.currentQuestion.answer_b}
									</Button>
								</div>

							</div>
							<div className={'row marginTop'}>
								<div className={'col-md-6'}>
									<Button
										onClick={() => this.onOptionSelect('answer_c')}
										color={this.state.selectedAnswer && this.state.selectedAnswer === 'answer_c' ? this.state.isCorrect  ? 'success' : 'danger' : 'secondary'}
									>
										C. {this.props.currentQuestion.answer_c}
									</Button>
								</div>
								<div className={'col-md-6'}>
									<Button
										onClick={() => this.onOptionSelect('answer_d')}
										color={this.state.selectedAnswer && this.state.selectedAnswer === 'answer_d' ? this.state.isCorrect  ? 'success' : 'danger' : 'secondary'}
									>
										D. {this.props.currentQuestion.answer_d}
									</Button>
								</div>
							</div>
						</div>
				}
				{
					!this.props.currentQuestion &&
						<div>
							<h1>Please select a question</h1>
						</div>
				}

			</div>
		);
	}
}