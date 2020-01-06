import React, { useState, useContext } from 'react';
import { UserContext } from './App';
import DishForm from './DishForm';

const Toggle = () => {
	const [isToggled, setToggled] = useState(false);
	const userInfo = useContext(UserContext);
	console.log('userInfo:', userInfo);
	if (!userInfo.user) return null;
	// useContext is just a way to consume the context with hooks, refer to react level two for info about context itself

	return (
		<div>
			<button onClick={() => setToggled(!isToggled)}>Toggle</button>
			{isToggled && <DishForm />}
		</div>
	);
};

export default Toggle;

// export default class Refactor extends Component {
// 	state = {
// 		isToggled: false
// 	};

// 	toggle = () => {
// 		this.setState((state) => {
// 			return { isToggled: !state.isToggled };
// 		});
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.toggle}>Toggle</button>
// 				{this.state.isToggled && <h2>Hello!</h2>}
// 			</div>
// 		);
// 	}
// }
