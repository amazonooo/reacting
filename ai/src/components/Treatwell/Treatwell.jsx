import styles from './Treatwell.module.css'
import logo from './../../../public/treatwell.svg'
import zapat from './../../../public/zapat.svg'

const Treatwell = () => {
    return (
			<>
				<section className={styles.treatwell}>
					<div className={styles.treatwell_logo}>
						<img src={logo} alt='' />
					</div>
                    <img src={zapat} className={styles.treatwell_zapat} alt='' />
                    <img src={zapat} className={styles.treatwell_zapat_1} alt='' />
					<div className={styles.treatwell_text}>
						This magical product actually works! P.ai has radically changed the
						way we build our audiences at Treatwell. Increasing new customer
						sales by
					</div>
					<div className={styles.name}>Albert Abello</div>
					<div className={styles.name_info}>Director of Growth, Treatwell</div>
				</section>
			</>
		)
}
 
export default Treatwell;