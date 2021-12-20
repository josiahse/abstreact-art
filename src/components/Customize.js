import React, { useRef } from 'react';

const Customize = ({ handleHWSubmit }) => {
	const heightRef = useRef();
	const widthRef = useRef();

	return (
		<div className='customize'>
			<form
				className='custom_form'
				onSubmit={(e) => {
					e.preventDefault();
					if (heightRef.current.value > 100) {
						heightRef.current.value = 50;
					}
					const height = heightRef.current.value;
					if (widthRef.current.value > 100) {
						widthRef.current.value = 50;
					}
					const width = widthRef.current.value;
					handleHWSubmit(height, width);
				}}>
				<label for="height">Height:</label>
        <input type='text' placeholder='Height (max 100)' ref={heightRef} name="height"/>
        <label for="width">Width:</label>
				<input type='text' placeholder='Width (max 100)' ref={widthRef} name="width"/>
				<input type='submit' value='Set Dimensions' />
			</form>
		</div>
	);
};

export default Customize;
