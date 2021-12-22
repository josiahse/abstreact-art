import './App.css';
// import Customize from './components/Customize';
import Header from './components/Header';
import Footer from './components/Footer';
import Grid from './components/Grid';
import SignUp from './components/SignUp';
import SignUpHeader from './components/SignUpHeader'
import SignIn from './components/SignIn';
import ChangePW from './components/ChangePW';

import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

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
							width={42}
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
      {user.id ? '' : <SignUpHeader />}
			{user.id ? <Footer user={user} updateUser={setUser} /> : ''}
		</div>
	);
}

export default App;
