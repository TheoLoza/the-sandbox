import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

export default class App extends Component {
	// Constructor for the state as well as binding methods (Obtained from React docs)
	constructor(props) {
		super(props);
		this.state = { username: 'Username' };

		// this.userNameHandler = this.userNameHandler.bind(this);
	}
	// Event handler method for changing the username
	// Use arrow functions for event handlers so that 'this' will refer to the class's 'this'
	userNameHandler = event => {
		this.setState({ username: event.target.value });
	};
	// Render to HTML
	render() {
		return (
			<div className='App'>
				<h1>Assignment 1</h1>
				<UserOutput username={this.state.username} />
				<UserInput
					changed={this.userNameHandler}
					value={this.state.username}
				/>
			</div>
		);
	}
}
