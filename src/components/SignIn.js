import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ user, updateUser }) => {
	const emailRef = useRef();
	const pwRef = useRef();
	const navigate = useNavigate();

	const signIn = (userNameParam, pw) => {
		fetch(`http://localhost:8000/sign-in/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ user: { email: userNameParam, password: pw } }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
        const updatedUser = {
					userName: data.user.email,
					token: data.user.token,
					id: data.user.id,
					grids: [],
				};
				updateUser(updatedUser);
				console.log(user);
				navigate(`/user/${user.id}`);
			})
			.catch(console.error);
	};

	return (
		<div className='account-div'>
			<h2 className='account-h2'>Log In</h2>
			<form
				className='account_form'
				onSubmit={(e) => {
					e.preventDefault();
					signIn(emailRef.current.value, pwRef.current.value);
				}}>
				<label htmlFor='email'>Email: </label>
				<input type='email' ref={emailRef} name='email' />
				<br />
				<label htmlFor='pw'>Password: </label>
				<input type='password' ref={pwRef} name='pw' />
				<br />
				<input type='submit' value='Log In' />
			</form>
		</div>
	);
};

export default SignIn;
