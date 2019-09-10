import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'; // Our functional component

// Components must have first letter caps because it will distinguish it from other html elements in JSX

// A component is a function that returns some JSX
// This component is stateful, meaning it has state management
// Other names include smart component, container
// Good practice to have less stateful components than stateless to prevent spaghetti code
const App = props => {
	// Using React Hooks for state management in functional components
	// useState will always return an array with two elements [current state, function to update state]
	// Using array destructuring to split up what useState returns
	const [personState, setPersonState] = useState({
		persons: [
			{ name: 'Max', age: 30 },
			{ name: 'Alex', age: 28 },
			{ name: 'Jane', age: 21 }
		]
	});

	const [otherState, setOtherState] = useState('some other state');
	console.log(personState, otherState);

	// Adding a method to functional component
	const switchNameHandler = newName => {
		// console.log('Button was clicked');
		// DON'T MUTATE THE STATE DIRECTLY: this.state.persons[0].name = 'Theo';
		// Our React Hooks method will NOT merge the old state with the new
		// More elegant way is to call useState multiple times
		setPersonState({
			persons: [
				{ name: newName, age: 21 },
				{ name: 'Alex', age: 28 },
				{ name: 'Jane', age: 20 }
			]
		});
	};

	const nameChangedHandler = event => {
		setPersonState({
			persons: [
				{ name: 'Max', age: 21 },
				{ name: event.target.value, age: 28 },
				{ name: 'Jane', age: 20 }
			]
		});
	};

	// Addin inline styles to style the button
	const style = {
		backgroundColor: 'white',
		font: 'inherit', // Get the surrounding fonts
		border: '1px solid blue',
		padding: '8px',
		cursor: 'pointer'
	};

	return (
		// Best practice is to keep elements under one root element per component
		<div className='App'>
			<h1>Hello World</h1>
			<h1>Very excited to work on this app</h1>
			<p>This also works</p>
			{/* <Person></Person> only if we're nesting some stuff, otherwise use self closing tags */}

			{/* Making our component more dynamic by passing in properties 
				We can also pass in method references
				We can pass arguements to the references using the bind() method
				Alternative syntax is an arrow function with a call to the method as well as the args but it can be inefficient*/}
			<Person
				name={personState.persons[0].name}
				age={personState.persons[0].age}
			/>
			<Person
				name={personState.persons[1].name}
				age={personState.persons[1].age}
				click={() => switchNameHandler('Arnold')}
				changed={nameChangedHandler}>
				Hobbies: racing
			</Person>
			<Person
				name={personState.persons[2].name}
				age={personState.persons[2].age}
			/>
			{/* Showing that the state will re-render the DOM */}
			{/* Notice that we are only calling a reference to the method, because we don't want it to 
				execute once the page loads */}
			<button style={style} onClick={switchNameHandler.bind(this, 'Max')}>
				Switch Name
			</button>
		</div>
	);

	// Another way to create JSX code
	// createElement takes the HTML element to render, configurations, and children
	// To render nested elements to the browser, replace the children with another call to createElement
	// Configurations is just any attributes we want to pass. Must be passed as an object
	// return React.createElement(
	// 	'div',
	// 	{ className: 'App' },
	// 	React.createElement('h1', null, 'Hello World')
	// );
};

export default App;

// Using state property. Only in the React.Component object
// Props are set and passed from the outside, but state is handled from the inside
// If the state changes, it will let React re-render the DOM
// state = {
// 	persons: [
// 		{ name: 'Max', age: 30 },
// 		{ name: 'Alex', age: 28 },
// 		{ name: 'Jane', age: 21 }
// 	]
// };

// switchNameHandler = () => {
// 	// console.log('Button was clicked');
// 	// DON'T MUTATE THE STATE DIRECTLY: this.state.persons[0].name = 'Theo';
// 	this.setState({
// 		persons: [
// 			{ name: 'Theo', age: 21 },
// 			{ name: 'Alex', age: 28 },
// 			{ name: 'Jane', age: 20 }
// 		]
// 	});
// };
