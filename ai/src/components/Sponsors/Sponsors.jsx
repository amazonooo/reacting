import styles from './Sponsors.module.css'
import asosImg from './img/asos.svg'
import dominoImg from './img/domino.svg'
import chefImg from './img/chef.svg'
import thgImg from './img/thg.svg'

const Sponsors = () => {
    return (
			<>
				<section className={styles.sponsors}>
					<div className={styles.sponsors_inner}>
						<h2 className={styles.sponsors_title}>Chosen by progressive marketers.</h2>
                        <ul className={styles.sponsors_list}>
                            <li className={styles.sponsors_item}>
                                <img src={asosImg} alt="" className={styles.sponsors_img} />
                            </li>
                            <li className={styles.sponsors_item}>
                                <img src={dominoImg} alt="" className={styles.sponsors_img} />
                            </li>
                            <li className={styles.sponsors_item}>
                                <img src={chefImg} alt="" className={styles.sponsors_img} />
                            </li>
                            <li className={styles.sponsors_item}>
                                <img src={thgImg} alt="" className={styles.sponsors_img} />
                            </li>
                        </ul>
                        <p className={styles.sponsors_text}>Read success stories</p>
					</div>
				</section>
			</>
		)
}
 
export default Sponsors;