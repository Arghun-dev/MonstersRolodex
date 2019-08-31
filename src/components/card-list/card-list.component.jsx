import React, {Component} from 'react';
import './card-list.styles.css';
import Card from '../../components/card/card.component';

class CardList extends Component {
	render(props){

		return(
			<div className="card-list mb-5" style={{marginTop: '10rem'}}>
				{this.props.monsters.map(monster => <Card key={monster.id} monster={monster} /> )}
			</div>
		);
	}
}

export default CardList;