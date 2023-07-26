import { useState, useEffect } from "react"; //import useState and useEffect hooks
import CardList from "./components/card-list/card-list.component"; //import CardList component
import SearchBox from "./components/search-box/search-box.component"; //import SearchBox component
import "./App.css"; //import css file

const App = () => {
	const [searchField, setSearchField] = useState(""); //useState hook
	const [monsters, setMonsters] = useState([]); //useState hook
	const [filteredMonsters, setFilteredMonsters] = useState(monsters); //useState hook
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users") //fetch return a response
			.then((response) => response.json()) //convert to json
			.then((users) => setMonsters(users)); //set the monsters array to the users
	}, []);

	useEffect(() => {
		const newfilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});

		setFilteredMonsters(newfilteredMonsters);
	}, [monsters, searchField]);

	//functional component
	const onSearchChange = (event) => {
		//onSearchChange method
		const searchFieldString = event.target.value.toLocaleLowerCase(); //get the value of the input
		setSearchField(searchFieldString); //set the searchField to the value of the input
	};

	return (
		//return jsx
		<div className="App">
			<h1 className="app-title">Monsters Rolodex</h1>
			<SearchBox
				className="monsters-search-box"
				placeholder="search monsters"
				onChangeHandler={onSearchChange}
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};
export default App;
