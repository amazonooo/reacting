import styles from './Volume.module.css'
import img from './../../../public/main.png'
import Card from './../Card/Card'
import { card } from './../../data'

const Volume = () => {
    return (
        <>
            <section className={styles.volume}>
                <h1 className={styles.volume_title}>Volume, uplift and efficiency.</h1>
                <h1 className={styles.volume_title}>No trade-offs.</h1>
                <div className={styles.volume_img}>
                    <img src={img} alt="fsd" />
                </div>
                <div className={styles.cards_inner}>
                    <Card title={card[0].title} text={card[0].text} view={card[0].view} />
                    <Card title={card[1].title} text={card[1].text} view={card[1].view} />
                    <Card title={card[2].title} text={card[2].text} view={card[2].view} />
                </div>
            </section>
        </>
    )
}
 
export default Volume