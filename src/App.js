import './App.css';
// import Customize from './components/Customize';
import Header from './components/Header';
import Footer from './components/Footer';
import Grid from './components/Grid';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ChangePW from './components/ChangePW';

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
	const [grid, setGrid] = useState(null);
	const [user, setUser] = useState({
		userName: null,
		id: null,
		token: null,
		gridStr: null,
	});

	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route
					path='/'
					element={
						<Grid
							width={50}
							userGrid={user.gridStr}
							grid={grid}
							updateGrid={setGrid}
						/>
					}></Route>
				<Route
					path='/sign-in'
					element={<SignIn user={user} updateUser={setUser} />}></Route>
				<Route
					path='/sign-up'
					element={<SignUp user={user} updateUser={setUser} />}></Route>
				<Route
					path='/change-pw'
					element={<ChangePW user={user} updateUser={setUser} />}></Route>
			</Routes>
			<Footer user={user} />
		</div>
	);
}

export default App;
