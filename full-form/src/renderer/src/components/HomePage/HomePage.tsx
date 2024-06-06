import img from '../../assets/profile.jpg'
import Card from '../Card/Card'
import { CardData } from '../Card/CardData'
import data from '../Card/data'
import Header from '../Header/Header'
import styles from './HomePage.module.css'

const HomePage: React.FC = () => {
  return (
    <>
    <Header />
      <div className={styles.card__page}>
        <h1 className={styles.title}>Launcher</h1>

        <div className={styles.profile}>
          <div className={styles.profile__inner}>
            <img src={img} className={styles.profile__img} alt="image" />
          </div>
            <h2 className={styles.choose}>Выберите сервер</h2>
          <div className={styles.page__block}>
            <div className={styles.page__inner}>
              {data.map((card: CardData) => (
                <Card key={card.id} title={card.title} id={card.id} imgUrl={card.imgUrl} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
