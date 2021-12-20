import './App.css';
import Customize from './components/Customize';
import React, { useState, useEffect } from 'react';

function App() {
	const [grid, setGrid] = useState({
		width: 50,
		height: 50,
		jsx: null,
		str: null,
	});

	const handleHWSubmit = (paramHeight, paramWidth) => {
		setGrid({ height: paramHeight, width: paramWidth, jsx: null, str: null });
	};

	useEffect(() => {
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
		let ret_arr = [];
		let ret_str = '';
		for (let i = 0; i < grid.height * grid.width; i++) {
			let init_array = [0, 1, 2, 3, 4, 5];
			let color_array = init_array.map(
				() => color_hex[Math.floor(Math.random() * 16)]
			);
			let color_str = color_array.join('');
			ret_str += color_str;
			ret_arr.push(
				<div
					key={color_str}
					className='square'
					style={{ backgroundColor: `#${color_str}` }}></div>
			);
		}
		setGrid({
			jsx: ret_arr,
			str: ret_str,
      height: grid.height,
      width: grid.width
		});
	}, [grid.width, grid.height]);

  const gridStyle = {
		display: 'grid',
		gridTemplateRows: `repeat(${grid.height}, 1fr)`,
		gridTemplateColumns: `repeat(${grid.width}, 1fr)`,
    width: `${grid.width * 10}px`
	};

  const gridJsx = <article id='color_grid' style={gridStyle}>
    {grid.jsx}
  </article>

	return (
		<div className='App'>
			<Customize handleHWSubmit={handleHWSubmit} />
			{gridJsx}
		</div>
	);
}

export default App;
