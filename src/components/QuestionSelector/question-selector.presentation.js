import React, {Component} from 'react';
import styles from './styles.css';
import {Form, FormGroup, Input, Button, Label} from 'reactstrap';


export default class QuestionSelector extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={'questionSelectorContainer'}>
				<Form inline>
					<FormGroup>
						<Label for="question_id" className="mr-sm-2">Control Panel</Label>
						<Input type="number" name="question_id" id="question_id" placeholder="question id" />
					</FormGroup>
					<Button
						className={'marginStart'}
						type={'button'}
					>Submit</Button>
				</Form>
				<Button>Clear</Button>
			</div>
		);
	}
}