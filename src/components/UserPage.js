import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import MakeGrid from './MakeGrid';

const UserPage = ({ user, updateUser, grid, updateGrid }) => {
	const [gridArray, setGridArray] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:8000/colors/${user.id}/`, {
			method: 'get',
			headers: {
				Authorization: `Token ${user.token}`,
			},
		})
			.then((r) => r.json())
			.then((data) => {
				// console.log(`data: ${data}`);
				setGridArray(data);
			})
			.catch((error) => console.error('Error: ', error));
	}, [user.id, user.token]);

  // console.log(`gridArray: ${gridArray}`);

	const userInfoJsx = gridArray.map((gridObj, index) => {
		// console.log(`gridObj: ${gridObj}`)
    const gridList = gridObj.color_list ? gridObj.color_list.split('#') : grid;
		const gridName = `Grid ${index + 1}`
		return (
			<li key={gridList[0]} className='gridCard'>
				<MakeGrid inputArray={gridList} sqSize={3} width={126} />
				<div className="grid_info">
					<h3 className='grid_name'>{gridName}</h3>
          <button>Remove</button>
				</div>
			</li>
		);
	});

	return <ul className='gridList'>{userInfoJsx}</ul>;
};

export default UserPage;
