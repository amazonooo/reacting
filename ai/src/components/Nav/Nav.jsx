import styles from './Nav.module.css'
import img from './logo.svg'

const Nav = () => {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <img src={img} />
                    <span>P.ai</span>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>Product</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>Customers</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>About</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>Blog</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>Login</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
 
export default Nav;