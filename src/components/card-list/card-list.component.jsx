import Card from '../card/card.component';//importing Card component

import './card-list.styles.css';//importing card-list.styles.css file


const CardList = ({monsters}) => (
        <div className='card-list'>
            {monsters.map(monster => {
                return <Card monsters={monster}/>
            })}
        </div>
        );//creating CardList component and passing monsters as props and mapping through monsters array and passing each monster as props to Card component

export default CardList;//  exporting CardList component