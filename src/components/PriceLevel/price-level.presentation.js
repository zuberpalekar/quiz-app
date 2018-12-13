import React, { Component } from 'react';
import styles from './styles.css';
import { Alert, Badge } from 'reactstrap';


export default class PriceLevel extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="priceLevelContainer">
                <div className="spanContainer">
                    {
                        this.props.gameStage.price_list.map((price) => {
                            return (
                                <Badge
                                    key={price}
                                    className={'block marginTop'}
                                    color={this.props.gameStage.won >= price ? 'success' : 'light'}>
                                    Rs. {price}
                                </Badge>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}