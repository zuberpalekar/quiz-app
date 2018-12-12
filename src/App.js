import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider} from 'react-redux';
import configureStore from './config/redux-store';
import {PersistGate} from 'redux-persist/integration/react';
import {HomeScreen} from "./components/index";

const {store, persistor} = configureStore();

class App extends Component {

	renderHome = () => {
		return (
			<HomeScreen/>
		);
	};

	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					{this.renderHome()}
				</PersistGate>
			</Provider>
		);
	}
}

export default App;
