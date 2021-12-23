import React, { useEffect, useState } from 'react';

import SignUpHeader from './SignUpHeader';
import MakeGrid from './MakeGrid';

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
		const data = JSON.stringify({
			color_list: gridStr,
			owner: user.id,
		});
		fetch(`http://localhost:8000/colors/${user.id}/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${user.token}`,
			},
			body: data,
		})
			.then((r) => r.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => console.error('Error: ', error));
	};

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

	const checkUserGrid = (userGridStr) => {
		if (userGridStr) {
			const gridArray = userGridStr.split('#');
			updateGrid(gridArray);
		} else {
			updateGrid(makeColorArray(width));
		}
	};

	const gridJsx = (
		<div className='color_box'>
			<MakeGrid
				inputArray={grid}
				sq={dimensions.squareSize}
				width={dimensions.width}
			/>

			<div className='redo'>
				<i onClick={() => setRR(!rr)} className='fas fa-redo'></i>
			</div>
			{user.id ? (
				<div className='save-div'>
					<button className='save' onClick={() => saveGrid(grid)}>
						Save
					</button>
				</div>
			) : (
				<SignUpHeader />
			)}
		</div>
	);

	useEffect(() => {
		updateGridDimensions();
		checkUserGrid(user.grid);
	}, [rr, window.innerWidth]);
	return gridJsx;
};

export default Grid;
