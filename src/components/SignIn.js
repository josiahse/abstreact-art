import React, { useRef } from 'react';

const SignIn = ({ user, updateUser }) => {
	const emailRef = useRef();
	const pwRef = useRef();

	const signIn = (e) => (userName, pw) => {
		e.preventDefault();
		fetch(`http://localhost:8000/sign-in/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ user: { email: userName, password: pw } }),
		})
			.then((r) => r.json())
			.then((data) => {
				console.log('fetch success');
				updateUser({
					...user,
					userName: data.user.email,
					token: data.user.token,
					id: data.user.id,
				});
			});
	};

	return (
		<div className='account-div'>
			<form
				className='account_form'
				onSubmit={(e) => {
					e.preventDefault();
					signIn(emailRef.current.value, pwRef.current.value);
					console.log('signed in');
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
