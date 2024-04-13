import styles from './Header.module.css'

const Header = () => {
    return (
			<header className={styles.header}>
				<h1 className={styles.header_title}>Generate unlimited,</h1>
				<h1 className={styles.header_title}>winning audiences.</h1>
				<h2 className={styles.header_subtitle}>No targeting gaps.</h2>
				<p className={styles.header_text}>Use machine learning with first-party data to generate</p>
				<p className={styles.header_text}>an endlessamount of audiences for your marketing &</p>
				<p className={styles.header_text}>advertising channels. Noeffort or delay &</p>
				<p className={styles.header_text}>complementary to Customer Data Platforms.</p>
			</header>
		)
}
 
export default Header;