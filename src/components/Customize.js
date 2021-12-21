import React, { useRef } from 'react';

const Customize = ({ handleHWSubmit }) => {
	const widthRef = useRef();

	return (
		<div className='customize'>
			<form
				className='custom_form'
				onSubmit={(e) => {
					e.preventDefault();

					if (widthRef.current.value > 100) {
						widthRef.current.value = 50;
					}
					handleHWSubmit(widthRef.current.value);
				}}>
        <label htmlFor="width">Side Length:</label>
				<input type='text' placeholder='(max 100)' ref={widthRef} name="width"/><br/>
				<input type='submit' value='Set Dimensions' />
			</form>
		</div>
	);
};

export default Customize;
