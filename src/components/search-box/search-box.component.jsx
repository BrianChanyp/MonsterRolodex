import './search-box.component.css';//importing search-box.styles.css file

const SearchBox = ({placeholder, onChangeHandler, className}) =>(//passing placeholder, onChangeHandler and className as props
        <input
        className={`search-box ${className}`} //css class
        type="search" // input type
        placeholder={placeholder} //placeholder
        onChange={onChangeHandler} //on change event
    />
);//creating SearchBox component and passing placeholder, onChangeHandler and className as props

export default SearchBox;