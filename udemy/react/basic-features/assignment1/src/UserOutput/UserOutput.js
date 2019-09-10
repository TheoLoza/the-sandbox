import React from 'react';
import './UserOutput.css';

const UserOutput = props => {
	return (
		<div className='UserOutput'>
			<p>Your username is shown below, type to change it</p>
			<p>{props.username}</p>
		</div>
	);
};

export default UserOutput;
