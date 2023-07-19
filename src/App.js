import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [
				{
					name: "Frankenstein",
					id: "asc1",
				},
				{
					name: "Dracula",
					id: "asc2",
				},
				{
					name: "Zombie",
					id: "asc3",
				},
				{
					name: "Mummy",
					id: "asc4",
				},
			],
		};
	}
	render() {
		return (
			<div className="App">
				{this.state.monsters.map((monster) => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
