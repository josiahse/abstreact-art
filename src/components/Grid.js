import React, { useEffect, useState } from 'react';

import SignUpHeader from './SignUpHeader';

const Grid = ({ width, user, updateUser, grid, updateGrid }) => {
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

	const [rr, setRR] = useState(true);
	const [dimensions, setDimensions] = useState({
		width: null,
		squareSize: null,
	});

  const saveGrid = (gridArray) => {
    const gridStr = gridArray.join('#');
    const data = JSON.stringify({ name: "", color_list:  gridStr, owner: user.id});
		fetch(`http://localhost:8000/colors/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
        'Authorization': `Token ${user.token}`
			},
			body: data,
		})
			.then((r) => r.json())
			.then((data) => {
				console.log('fetch success');
				updateUser({
					...user,
					grids: [...user.grids, data.color_list]
				});
			})
			.catch((error) => console.error('Error: ', error));

  }

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

	const makeColorArray = () => {
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
    updateGrid(
			inputArray.map((color, index) => (
				<div
					key={index}
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
		gridTemplateRows: `repeat(${width}},1fr)`,
		gridTemplateColumns: `repeat(${width},1fr)`,
		height: `${dimensions.width}px`,
		width: `${dimensions.width}px`,
	};

	const gridJsx = (
		<div className='color_box'>
			<div id='color_grid' style={gridStyle}>
				{grid}
			</div>
			<div className='redo_div'>
				<i onClick={() => setRR(!rr)} className='fas fa-redo'></i>
			</div>
			{user.id ? <button onClick={() => saveGrid(grid)}>Save</button> : <SignUpHeader />}
		</div>
	);

	useEffect(() => {
		updateGridDimensions();
		checkUserGrid(user.grid);
	}, [rr, window.innerWidth]);
	return gridJsx;
};

export default Grid;
