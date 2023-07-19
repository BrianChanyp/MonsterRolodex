import { Component } from "react";
import "./App.css";

class App extends Component {
	//class component
	constructor() {
		//constructor method
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
				<input
					className="search"
					type="search"
					placeholder="search monsters"
					onChange={(event) => {
						const filteredMonsters = this.state.monsters.filter((monster) => {
							//filter the monsters array
							return monster.name //return the monster name
								.toLowerCase() //convert to lowercase
								.includes(event.target.value.toLowerCase()); //return the monster name that includes the value of the input
						});
						this.setState({ monsters: filteredMonsters }); //set the state
					}}
				/>
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
