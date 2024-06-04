import React from 'react';
import { useParams } from 'react-router-dom';
import { CardData } from '../Card/CardData';
import data from '../Card/data';

interface CardDetailsParams {
  id: string;
}

const Info: React.FC = () => {
  const { id } = useParams<CardDetailsParams>();
  const card = data.find((card: CardData) => card.id === parseInt(id));

  if (!card) {
    return <div>Not Found</div>
  }

  return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: '100vh',
			}}
		>
			<div>
				<img src={card.imgUrl} alt={card.title} />
				<h2>{card.title}</h2>
				<button>Играть</button>
				<span style={{ marginLeft: '12px' }}>Параметры</span>
			</div>
		</div>
	)
}
 
export default Info;