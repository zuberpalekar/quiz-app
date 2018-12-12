import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import configureStore from './config/redux-store';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = configureStore();

class App extends Component {

	renderHome = () => {
		return (
			<div className="App">
				<header className="App-header">
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
				</header>
			</div>
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
