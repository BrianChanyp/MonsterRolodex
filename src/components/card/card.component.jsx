import "./card.styles.css";//importing card.styles.css file

const Card = ({monster:{id,name,email}}) => {//passing monster as props and destructuring monster object
		return (
			<div className="card-container" key={id}>
				<img
					alt={`monster ${name}`}
					src={`https://robohash.org/${id}?set=set2&size=180x180`}
				/>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		);
	};//creating Card component and destructuring monster object and returning jsx

export default Card;
