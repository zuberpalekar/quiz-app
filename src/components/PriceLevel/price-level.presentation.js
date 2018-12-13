import React, {Component} from 'react';
import styles from './styles.css';
import {Alert, Badge} from 'reactstrap';


export default class PriceLevel extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div class="priceLevelContainer">
				<Badge className={'block marginTop'} color={'light'}>
					Rps. 30
				</Badge>
				<Badge className={'block marginTop'} color={'light'}>
					Rps. 30
				</Badge>
				<Badge className={'block marginTop'} color={'light'}>
					Rps. 30
				</Badge>
				<Badge className={'block marginTop'} color={'primary'}>
					Rps. 20
				</Badge>
				<Badge className={'block marginTop'} color={'primary'}>
					Rps. 10
				</Badge>
				<Badge className={'block marginTop'} color={'primary'}>
					Rps. 1
				</Badge>
			</div>
		);
	}
}