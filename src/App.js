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
			searchField: "", //empty string
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
		const filteredMonsters = this.state.monsters.filter((monster) => {
			// filter the monsters array
			return monster.name //return the monster name
				.toLocaleLowerCase() //convert to lower case
				.includes(this.state.searchField); //check if the searchField is included in the monster name
		});

		return (
			//return jsx
			<div className="App">
				<input
					className="search" //css class
					type="search" // input type
					placeholder="search monsters" //placeholder
					onChange={(event) => {
						const searchField = event.target.value.toLocaleLowerCase(); //get the value of the input
						this.setState(() => {
							return { searchField };
						}); //set the state
					}}
				/>
				{filteredMonsters.map((monster) => {
					//map the filteredMonsters array
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
