// import React, { useState, useEffect, useRef } from 'react';
import React, { useRef } from 'react';
import useAbortableFetch from 'use-abortable-fetch';
import { useSpring, animated } from 'react-spring';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

const App = () => {
	const [name, setName] = useTitleInput('');
	const ref = useRef();

	const { data } = useAbortableFetch(
		'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
	);

	const props = useSpring({ opacity: 1, from: { opacity: 0 } });

	// if (!data) return null;

	// const [dishes, setDishes] = useState([]);

	// const fetchDishes = async () => {
	// 	console.log('fetchDishes Function Just Ran');
	// 	const res = await fetch();
	// 	// 'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
	// 	const data = await res.json();
	// 	setDishes(data);
	// };

	// useEffect(() => {
	// 	fetchDishes();
	// }, [name]);

	//-------------------------------------------------------------------------------------------------------
	//                                  USING useEFFECT TO FETCH DATA                                        |
	//-------------------------------------------------------------------------------------------------------|
	//                                                                                                       |
	//           must write an async function that is fetching data outside                                  |
	//           of useEffect and then call it from inside of the useEffect                                  |
	//           hook (function)                                                                             |
	//           The second Parameter to useEffect is an ARRAY [], To check if an input                      |
	//           has changed before running useEffect put it inside [input].                                 |
	//           an empty [] says only run on MOUNT. Making it function as                                   |
	//           COMPONENTDIDMOUNT.                                                                          |
	//                                                                                                       |
	//           To have more control of useEffect in the second parameter should                            |
	//           always have what the thing is that has to change for the effect                             |
	//           to run                                                                                      |
	//-------------------------------------------------------------------------------------------------------

	return (
		<div className='main-wrapper' ref={ref}>
			<animated.h1
				style={props}
				onClick={() => ref.current.classList.add('new-fake-class')}
			>
				Level Up Dishes
			</animated.h1>
			<Toggle />
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input
					type='text'
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<button>Submit</button>
			</form>
			{/* {dishes */}
			{data &&
				data.map((dish) => (
					<article className='dish-card dish-card--withImage'>
						<h3>{dish.name}</h3>
						<p>{dish.desc}</p>
						<div className='ingredients'>
							{dish.ingredients.map((ingredient) => (
								<span>{ingredient}</span>
							))}
						</div>
					</article>
				))}
		</div>
	);
};

export default App;
