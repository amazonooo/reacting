import styles from './Card.module.css'
import imgSil from './../../img/colors/silver.jfif'

const Card = (props) => {

    return (
        <div className={styles.card}>
            <a href="#!" className={styles.card__link}></a>
            <img className={styles.card__img} src={props.img} alt="adafc" />
            <h2 className={styles.card__title}>{props.title}</h2>
            <p className={styles.card__text}>Серебристый</p>
        </div>
    );
}
 
export default Card;