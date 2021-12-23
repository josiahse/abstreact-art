import React from 'react';

const MakeGrid = ({ inputArray, sqSize, width }) => {
	// console.log(inputArray)
	const gridStyle = {
		display: 'grid',
		gridTemplateRows: `repeat(42,1fr)`,
		gridTemplateColumns: `repeat(42,1fr)`,
		height: `${width}px`,
		width: `${width}px`,
	};
	const gridJsx = inputArray.map((color, index) => (
		<div
			key={index}
			className='square'
			style={{
				backgroundColor: `#${color}`,
				width: `${sqSize}px`,
				height: `${sqSize}px`,
			}}></div>
	));
	return (
		<div id='color_grid' style={gridStyle}>
			{gridJsx}
		</div>
	);
};

export default MakeGrid;
