import React from 'react';
import './Person.css'; // Needed to add styling to this component. Webpack handles this

// Notice how we don't need to import Component because we are not using a class that will extend it

// Creating functional components
// A component is a function returning some JSX
// This component is stateless because we are not managing any states here
// Other names are dumb component, functional component, presentation component
// Good practice to have more of these than stateful components
const person = props => {
	// Example of dynamic content
	// return <p>I am a person and my age is {Math.ceil(Math.random() * 30)}</p>;

	// Making use of the props object
	// In class components, it will be this.props
	return (
		// Multiple elements must be enclosed in another tag
		// Making use of the children property: any elements or text that is inside of our component
		// Self closing elements won't pass any children
		<div className='Person'>
			<p onClick={props.click}>
				I am {props.name} and my age is {props.age} years old
			</p>
			<p>{props.children}</p>
			{/* Setting up two way binding */}
			<input type='text' onChange={props.changed} value={props.name} />
		</div>
	);
};

export default person;
