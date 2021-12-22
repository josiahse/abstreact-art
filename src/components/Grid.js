import React, { useEffect, useState } from 'react';

const Grid = ({ width, userGrid, grid, updateGrid }) => {
	const color_hex = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
	];

	const [dimensions, setDimensions] = useState({
		width: null,
		squareSize: null,
	});

	const updateGridDimensions = () => {
		let sq = 0;
		if (window.innerWidth > window.innerHeight) {
			sq = Math.floor((1 / 50) * Math.floor(window.innerHeight * 0.7));
			setDimensions({ width: sq * width, squareSize: sq });
		} else {
			sq = Math.floor((1 / 50) * Math.floor(window.innerWidth * 0.8));
			setDimensions({ width: sq * width, squareSize: sq });
		}
	};

	const makeColorArray = () => {
		let ret_arr = [];

		for (let i = 0; i < 2500; i++) {
			let init_array = [0, 1, 2, 3, 4, 5];
			let color_array = init_array.map(
				() => color_hex[Math.floor(Math.random() * 16)]
			);
			let color_str = color_array.join('');
			ret_arr.push(color_str);
		}
		return ret_arr;
	};

	const makeJsx = (inputArray) => {
		updateGrid(
			inputArray.map((color) => (
				<div
					key={color}
					className='square'
					style={{
						backgroundColor: `#${color}`,
						width: `${dimensions.squareSize}px`,
						height: `${dimensions.squareSize}px`,
					}}></div>
			))
		);
	};

	const checkUserGrid = (userGridStr) => {
		if (userGridStr) {
			const gridArray = userGridStr.split('#');
			makeJsx(gridArray);
		} else {
			makeJsx(makeColorArray(width));
		}
	};

	const gridStyle = {
		display: 'grid',
		gridTemplateRows: `repeat(50,1fr)`,
		gridTemplateColumns: `repeat(50,1fr)`,
		height: `${dimensions.width}px`,
		width: `${dimensions.width}px`,
	};

	const gridJsx = (
		<div id='color_grid' style={gridStyle}>
			{grid}
		</div>
	);

	useEffect(() => {
		updateGridDimensions();
		checkUserGrid(userGrid);
	}, [window.innerWidth]);
	return gridJsx;
};

export default Grid;
