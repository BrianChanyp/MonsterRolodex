import{Component} from 'react';//importing React and Component from react
import './card-list.styles.css';//importing card-list.styles.css file

class CardList extends Component{//creating a class CardList which extends Component
    render(){//render method
        const{monsters}=this.props;//destructuring monsters from this.props
        return(//returning the following
            <div className='card-list'>
               {monsters.map((monster)=>{//mapping through monsters
               const {name,email,id }=monster;//destructuring name and email from monster
               return(//returning the following
                     <div className ='card-container' key={id}>
                            <img 
                                alt={`monster ${name}`}  
                                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                            />
                            <h2>{name}</h2>
                            <p>{email}</p>
                    </div>
                );
                })}
            </div>
        );
    }
}

export default CardList;//  exporting CardList component