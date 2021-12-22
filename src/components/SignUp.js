import React, { useRef } from 'react';

const SignUp = ({ user, updateUser }) => {
	const emailRef1 = useRef();
	const emailRef2 = useRef();
	const pwRef1 = useRef();
	const pwRef2 = useRef();

	const signUp = (e) => (userName, pw) => {
		e.preventDefault();
		fetch(`http://localhost:8000/sign-up/`, {
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
			})
			.catch(console.error);
	};

	return (
		<div className='account-div'>
			<form
				className='account_form'
				onSubmit={(e) => {
					e.preventDefault();
					if (emailRef1.current.value === emailRef2.current.value) {
						if (pwRef1.current.value === pwRef2.current.value) {
							signUp(emailRef1.current.value, pwRef1.current.value);
						} else {
							alert('Your passwords must match');
						}
					} else {
						alert('Your email must match');
					}
				}}>
				<label htmlFor='email'>Email: </label>
				<input type='email' ref={emailRef1} name='email' />
				<br />
				<label htmlFor='email2'>Confirm Email: </label>
				<input type='email' ref={emailRef2} name='email2' />
				<br />
				<label htmlFor='pw'>Password: </label>
				<input type='password' ref={pwRef1} name='pw' />
				<br />
				<label htmlFor='pw2'>Confirm Password: </label>
				<input type='password' ref={pwRef2} name='pw2' />
				<br />
				<input type='submit' value='Sign Up' />
			</form>
		</div>
	);
};

export default SignUp;
