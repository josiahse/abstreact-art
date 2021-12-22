import React from 'react';
import { Link } from 'react-router-dom';

const SignUpHeader = () => {
	return (
		<div className='signUpHeader'>
			<p className='signup'>
				Like the design? <br />
				Sign up{' '}
				<Link to='/sign-up' className='account_link'>
					here
				</Link>{' '}
				to save it!
			</p>
			<p className='login'>
				Already a member? Click{' '}
				<Link to='/sign-in' className='account_link'>
					here
				</Link>{' '}
				to log in.
			</p>
		</div>
	);
};

export default SignUpHeader;
