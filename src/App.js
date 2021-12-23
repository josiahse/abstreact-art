import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Grid from './components/Grid';
import SignUp from './components/SignUp';
import UserPage from './components/UserPage';
import SignIn from './components/SignIn';
import ChangePW from './components/ChangePW';

function App() {
	const [grid, setGrid] = useState(null);
	const [user, setUser] = useState({
		userName: null,
		id: null,
		token: null,
		grids: [],
	});

	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route
					path='/'
					element={
						<Grid
							width={42}
							user={user}
							updateUser={setUser}
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
				<Route
					path='/user/:id'
					element={
						<UserPage
							user={user}
							updateUser={setUser}
							grid={grid}
							updateGrid={setGrid}
						/>
					}></Route>
			</Routes>
			{user.id ? <Footer user={user} updateUser={setUser} /> : ''}
		</div>
	);
}

export default App;
