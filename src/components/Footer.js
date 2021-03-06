import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = ({ user, updateUser }) => {
	const navigate = useNavigate();
	const signOut = async () => {
		const data = JSON.stringify({
			user: { id: user.id, email: user.userName },
		});
		await fetch(`http://localhost:8000/sign-out/`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${user.token}`,
			},
			body: data,
		})
			.then((r) => r.json())
			.then((data) => {
				console.log(data);
				updateUser({
					userName: null,
					id: null,
					token: null,
				});
				navigate('/');
			})
			.catch((error) => console.error('Error: ', error));
	};

	return (
		<div className='footer'>
			<Link to={`/user/${user.id}`}>My Grids</Link>
			<Link to='/change-pw'>Change Password</Link>
			<button
				className='sign_out'
				onClick={(e) => {
					e.preventDefault();
					signOut();
				}}>
				Sign Out
			</button>
		</div>
	);
};

export default Footer;
