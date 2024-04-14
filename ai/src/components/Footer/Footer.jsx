import styles from './Footer.module.css'
import img from './../Nav/logo.svg'

const Footer = () => {
    return (
			<>
				<footer className={styles.footer}>
					<div className={styles.top}>
						<div className={styles.footer_logo}>
							<img src={img} />
							<span>P.ai</span>
						</div>
						<div className={styles.info}>
							<div className={styles.info_desc}>
								<div className={styles.title}>Product</div>
								<p className={styles.text}>Overview</p>
								<p className={styles.text}>Customers</p>
							</div>
							<div className={styles.info_desc}>
								<div className={styles.title}>Company</div>
								<p className={styles.text}>About Us</p>
								<p className={styles.text}>Support</p>
								<p className={styles.text}>Contact</p>
							</div>
							<div className={styles.info_desc}>
								<div className={styles.title}>Social</div>
								<p className={styles.text}>Blog</p>
								<p className={styles.text}>Twitter</p>
								<p className={styles.text}>LinkedIn</p>
							</div>
						</div>
					</div>
					<div className={styles.bottom}>
						<div className={styles.program}>Programmai Ltd. © 2022. All Rights Reserved.</div>
						<div className={styles.privacy}>
							<p>Privacy Policy</p>
							<p>Data Processing Agreement</p>
						</div>
					</div>
				</footer>
			</>
		)
}
 
export default Footer;