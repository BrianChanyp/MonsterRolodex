import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
        
        <input
        className={this.props.className} //css class
        type="search" // input type
        placeholder={this.props.placeholder} //placeholder
        onChange={this.props.onChangeHandler} //on change event
    />
    );
  }
}

export default SearchBox;