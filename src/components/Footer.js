import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({user, updateUser}) => {
	const signOut = (e) => (token) => {
		e.preventDefault()
    fetch(`http://localhost:8000/sign-out/${user.id}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Token ${token}`,
			},
		})
			.then((r) => r.json())
			.then((data) =>
				updateUser({
					userName: null,
					id: null,
					token: null,
					gridStr: null,
				})
			);
	};
  return (
		<div className='footer'>
			<Link to='/change-pw'>Change Password</Link>
			<button onClick={signOut(user.token)}>Sign Out</button>
		</div>
	);
};

export default Footer;
