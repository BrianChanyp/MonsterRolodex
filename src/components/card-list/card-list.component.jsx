import{Component} from 'react';//importing React and Component from react

class CardList extends Component{//creating a class CardList which extends Component
    render(){//render method
        console.log(this.props.monsters);//printing this.props
        console.log('render from Cardlist');//printing render from Cardlist
        const{monsters}=this.props;//destructuring monsters from this.props
        return(//returning the following
            <div>
               {monsters.map(monster=>(//mapping through monsters
                     <h1 key={monster.id}>{monster.name}</h1>//returning h1 with monster name and key
                ))}
            </div>
        );
    }
}

export default CardList;//  exporting CardList component