import './App.css';
import Customize from './components/Customize';
import Header from './components/Header';

import React, { useState, useEffect } from 'react';

function App() {
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
	const [grid, setGrid] = useState({
		width: 50,
		jsx: null,
	});

	const [dimensions, setDimensions] = useState({width: null, squareSize: null});

	const [user, setUser] = useState({
		userName: null,
		id: null,
		gridStr: null,
		token: null,
	});

	// const handleHWSubmit = (paramWidth) => {
	// 	setGrid({ ...grid, width: paramWidth });
  //   setGridDimensions(window.innerWidth, window.innerHeight, paramWidth);
	// };

	const setGridDimensions = (winWidth, winHeight) => {
		let sq = 0;
    if (winWidth > winHeight) {
      sq = Math.floor((1 / grid.width) * Math.floor(winHeight * 0.7));
			setDimensions({width: sq * grid.width, squareSize: sq});
		} else {
			sq = Math.floor((1 / grid.width) * Math.floor(winWidth * 0.8));
      setDimensions({ width: sq * grid.width, squareSize: sq });
		}
	};

	const makeColorArray = (width) => {
		let ret_arr = [];

		for (let i = 0; i < width * width; i++) {
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
		setGrid({
			...grid,
			jsx: inputArray.map((color) => (
				<div
					key={color}
					className='square'
					style={{
						backgroundColor: `#${color}`,
						width: `${dimensions.squareSize}px`,
						height: `${dimensions.squareSize}px`,
					}}></div>
			)),
		});
	};

	const checkUserGrid = (userGridStr) => {
		if (userGridStr) {
			const gridArray = userGridStr.split('#');
			setGrid({ ...grid, width: Math.sqrt(gridArray.len()) });
			makeJsx(gridArray);
		} else {
			makeJsx(makeColorArray(grid.width));
		}
	};

	useEffect(() => {
    setGridDimensions(window.innerWidth, window.innerHeight);
		checkUserGrid(user.gridStr);
	}, []);

	const gridStyle = {
		display: 'grid',
		gridTemplateRows: `repeat(${grid.width}, 1fr)`,
		gridTemplateColumns: `repeat(${grid.width}, 1fr)`,
		height: `${dimensions.width}px`,
		width: `${dimensions.width}px`,
	};

	const gridJsx = (
		<article id='color_grid' style={gridStyle}>
			{grid.jsx}
		</article>
	);

	return (
		<div className='App'>
			<Header />
			{/* <Customize handleHWSubmit={handleHWSubmit} /> */}
			{gridJsx}
		</div>
	);
}

export default App;
