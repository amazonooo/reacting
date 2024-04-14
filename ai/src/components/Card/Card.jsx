import styles from './Card.module.css'
import img from './img1.svg'
import line from './line.png'

const Card = (props) => {
    return (
			<>
				<div className={styles.card}>
					<img src={line} alt='' className={styles.line} />
					<div className={styles.card_logo}>
						<span><img src={img} alt="" /></span>
						<span>{props.title}</span>
					</div>
					<div className={styles.card_text}>
						<p>{props.text}</p>
					</div>
					<p className={styles.card_view}>{props.view}</p>
				</div>
			</>
		)
}
 
export default Card;