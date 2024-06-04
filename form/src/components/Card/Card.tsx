import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css';

interface CardProps {
	id: number
  title: string
  imageUrl: string
}

const Card: React.FC<CardProps> = ({ title, imageUrl, id })  => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/card/${id}`)
	}

	return (
		<div className={styles.card} onClick={handleClick}>
			<img src={imageUrl} alt={title} />
			<h2>{title}</h2>
		</div>
	)
}
 
export default Card;