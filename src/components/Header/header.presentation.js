import React, {Component} from 'react';
import styles from './styles.css';


export default class Header extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className={"App-header"}>
				<div className={"headerTitle"}>
					<h3>The Quiz</h3>
				</div>
                <div className={"lifelineStatusContainer"}>
					<p>Life line status shown here</p>
				</div>
			</div>
		);
	}
}