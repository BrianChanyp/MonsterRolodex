import { Component } from "react"; //import Component from react
import CardList from "./components/card-list/card-list.component"; //import CardList component
import SearchBox from "./components/search-box/search-box.component"; //import SearchBox component
import "./App.css"; //import css file

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
			.then(
				(
					users //get the users
				) =>
					this.setState(() => {
						//set the state
						return { monsters: users }; //set the monsters array to the users
					})
			);
	}

	onSearchChange = (event) => {
		//onSearchChange method
		const searchField = event.target.value.toLocaleLowerCase(); //get the value of the input
		this.setState(() => {
			//set the state
			return { searchField };
		});
	};

	render() {
		//console.log("render from App.js"); //log render from App.js
		//render method
		const { monsters, searchField } = this.state; //destructuring
		const { onSearchChange } = this; //destructuring

		const filteredMonsters = monsters.filter((monster) => {
			// filter the monsters array
			return monster.name //return the monster name
				.toLocaleLowerCase() //convert to lower case
				.includes(searchField); //check if the searchField is included in the monster name
		});
		return (
			//return jsx
			<div className="App">
				<SearchBox
					className="monsters-search-box"
					placeholder="search monsters"
					onChangeHandler={onSearchChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div> //jsx
		);
	}
}

export default App;
