import styles from './Demo.module.css'

const Demo = () => {
    return (
        <section className={styles.demo}>
            <h1 className={styles.title}>We’d love to give you a demo.</h1>
            <button className={styles.btn}>Book a demo</button>
        </section>
    );
}
 
export default Demo;