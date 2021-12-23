import React, { useEffect, useState } from 'react';

const MiniGrid = ({ width, gridString }) => {
	const [dimensions, setDimensions] = useState({
		width: null,
		squareSize: null,
	});
  const [grid, setGrid] = useState('');

	const updateGridDimensions = () => {
		let sq = 0;
		if (window.innerWidth > window.innerHeight) {
			sq = Math.floor((1 / width) * Math.floor(window.innerHeight * 0.7));
			setDimensions({ width: sq * width, squareSize: sq });
		} else {
			sq = Math.floor((1 / width) * Math.floor(window.innerWidth * 0.8));
			setDimensions({ width: sq * width, squareSize: sq });
		}
	};

	const makeJsx = (inputString) => {
		const inputArray = inputString.split('#');
		return inputArray.map((color, index) => (
			<div
				key={index}
				className='square'
				style={{
					backgroundColor: `#${color}`,
					width: `${dimensions.squareSize}px`,
					height: `${dimensions.squareSize}px`,
				}}></div>
		));
	};

	const gridStyle = {
		display: 'grid',
		gridTemplateRows: `repeat(${width}},1fr)`,
		gridTemplateColumns: `repeat(${width},1fr)`,
		height: `${dimensions.width}px`,
		width: `${dimensions.width}px`,
	};

	const gridJsx = (
		<div id='mini_grid' style={gridStyle}>
			{grid}
		</div>
	);

	useEffect(() => {
		updateGridDimensions();
		setGrid(makeJsx(gridString));
	}, []);
	return gridJsx;
};

export default MiniGrid;
