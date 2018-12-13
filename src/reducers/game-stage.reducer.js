import * as types from './../actions/types';

const initialState = {
	price_list : [1000, 800, 600, 400, 200, 100, 75, 40, 20, 10],
	won : 0
};

let price_levels = {
	"1" : 10,
	"2": 20,
	"3": 40,
	"4": 75,
	"5": 100,
	"6": 200,
	"7": 400,
	"8": 600,
	"9": 800,
	"10": 10000
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.CORRECT_ANSWER : {
			return {
				...state,
				won : price_levels[action.payload.question.Price]
			}
		}
		default : {
			return {...state}
		}
	}
}