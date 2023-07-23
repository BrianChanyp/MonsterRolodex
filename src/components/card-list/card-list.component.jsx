import{Component} from 'react';//importing React and Component from react
import Card from '../card/card.component';//importing Card component

import './card-list.styles.css';//importing card-list.styles.css file


class CardList extends Component{//creating a class CardList which extends Component
    render(){//render method
        const{monsters}=this.props;//destructuring monsters from this.props
        return(//returning the following
            <div className='card-list'>
               {monsters.map((monster)=>{//mapping through monsters
               
               return(//returning the following
                     <Card monster={monster}/>//passing monster as props to Card component
                );
                })}
            </div>
        );
    }
}

export default CardList;//  exporting CardList component