import './App.css';


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
	let color_list = [];
	for (let i = 0; i < 2500; i++) {
		let color_array = [];
		for (let j = 0; j < 6; j++) {
			color_array.push(color_hex[Math.floor(Math.random() * 16)]);
		}
		let color_str = color_array.join('');
		color_list.push(color_str);
	}

	let colorJsx = color_list.map((color) => (
		<div
			key={color}
			className='square'
			style={{ backgroundColor: `#${color}` }}></div>
	));
	

	return (
		<div className='App'>
			<article id="colorz">{colorJsx}</article>
		</div>
	);
}

export default App;
