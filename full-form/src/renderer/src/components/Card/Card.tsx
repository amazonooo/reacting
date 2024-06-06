import { useNavigate } from 'react-router-dom'
import styles from './Card.module.css'

interface CardProps {
  id: number
  title: string
  imgUrl: string
}

const Card: React.FC<CardProps> = ({ title, imgUrl, id }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/card/${id}`)
  }

  return (
    <div className={styles.card_block}>
      <div className={styles.card}>
        <img className={styles.card_img} src={imgUrl} alt={title} />
        <div className={styles.layer}></div>
        <div className={styles.info}>
          <button className={styles.play}>Играть</button>
          <button className={styles.more} onClick={handleClick}>
            Подробнее
          </button>
        </div>
      <h2>{title}</h2>
      </div>
    </div>
  )
}

export default Card
