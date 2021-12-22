import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({user}) => {
	const signOut = (e) => (token) => {
		e.preventDefault()
    fetch(`http://localhost:8000/sign-out/${user.id}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Token ${token}`,
			},
		})
			.then((r) => r.json())
			.then((data) => data);
	};
  return (
		<div className='footer'>
			<Link to='/sign-up'>Sign Up</Link>
			<Link to='/sign-in'>Log In</Link>
			<Link to='/change-pw'>Change Password</Link>
			<button onClick={signOut(user.token)}>Sign Out</button>
		</div>
	);
};

export default Footer;
