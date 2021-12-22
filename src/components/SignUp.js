import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ user, updateUser }) => {
	const emailRef1 = useRef();
	const emailRef2 = useRef();
	const pwRef1 = useRef();
	const pwRef2 = useRef();

  const navigate = useNavigate();

	const signUp = (userName, pw) => {
		console.log('hit sign up function');
		const data = JSON.stringify({ user: { email: userName, password: pw } });
		fetch(`http://localhost:8000/sign-up/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: data,
		})
			.then((r) => r.json())
			.then((data) => {
				console.log('fetch success');
				updateUser({
					...user,
					userName: data.user.email,
					id: data.user.id,
				});
        navigate(`/user/${user.id}`);
			})
			.catch((error) => console.error('Error: ', error));
	};

	return (
		<div className='account-div'>
			<h2 className="account-h2">Create Account</h2>
      <form
				className='account_form'
				onSubmit={(e) => {
					e.preventDefault();
					console.log('clicked');
					if (emailRef1.current.value === emailRef2.current.value) {
						console.log('email match');
						if (pwRef1.current.value === pwRef2.current.value) {
							console.log('pw match');
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
