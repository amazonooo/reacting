import Card from '../Card/Card'
import { CardData } from '../Card/CardData'
import data from '../Card/data'
import styles from './Home.module.css'

const HomePage:React.FC = () => {
	return (
		<div className={styles.page}>
			<h1 className={styles.title}>Hello</h1>

			<h2 className={styles.choose}>Выберите игру</h2>

			<div className={styles.block}>
				<div className={styles.inner}>
					{data.map((card: CardData) => (
						<Card key={card.id} title={card.title} id={card.id} imageUrl={card.imgUrl} />
					))}
				</div>
			</div>
		</div>
	)
}

export default HomePage