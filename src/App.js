import { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super(); //call the constructor method on the component class
		this.state = {
			//state is a object
			monsters: [], //empty array
		};
	}

	componentDidMount() {
		//lifecycle method
		fetch("https://jsonplaceholder.typicode.com/users") //fetch return a response
			.then((response) => response.json()) //convert to json
			.then((users) => this.setState({ monsters: users })); //set the state
	}
	render() {
		//render method
		return (
			//return jsx
			<div className="App">
				{this.state.monsters.map((monster) => {
					//map over the monsters array
					return (
						//return jsx
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div> //  key is a unique value
					);
				})}
			</div> //jsx
		);
	}
}

export default App;
