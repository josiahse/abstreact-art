import React, { useRef } from 'react';

const ChangePW = ({ user, updateUser }) => {
	const oldPWRef = useRef();
	const newPWRef1 = useRef();
	const newPWRef2 = useRef();

	const changePW = (token, oldPW, newPW) => {
		fetch(`http://localhost:8000/change-pw/${user.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${token}`,
			},
			body: JSON.stringify({ passwords: { old: oldPW, new: newPW } }),
		})
			.then((r) => r.json())
			.then((data) => data);
	};

	return (
		<div className='account-div'>
			<form
				className='account_form'
				onSubmit={(e) => {
					e.preventDefault();

					if (newPWRef1 === newPWRef2) {
						changePW(oldPWRef, newPWRef1);
					} else {
						alert('Your new passwords must match');
					}
				}}>
				<label htmlFor='pw'>Old Password: </label>
				<input type='password' ref={oldPWRef} name='pw' />
				<br />
				<label htmlFor='pw'>New Password: </label>
				<input type='password' ref={newPWRef1} name='pw' />
				<br />
				<label htmlFor='pw2'>Confirm Password: </label>
				<input type='password' ref={newPWRef2} name='pw2' />
				<br />
				<input type='submit' value='Sign Up' />
			</form>
		</div>
	);
};

export default ChangePW;
