import React, {Component} from 'react';
import styles from './styles.css';
import logo from '../../logo.svg';
import Header from "../Header/header.container";
import QuizQuestion from "../QuizQuestion/quiz-question.container";
import QuestionSelector from "../QuestionSelector/question-selector.container";
import PriceLevel from "../PriceLevel/price-level.container";


export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className="App">
				<Header></Header>
				<div className={'column'}>
					<QuizQuestion/>
					<PriceLevel/>
				</div>
				<div className={'footer'}>
					<QuestionSelector/>
				</div>
				{/*<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>*/}
			</div>
		);
	}
}