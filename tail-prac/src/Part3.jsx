import styles from './Core.module.scss'

export function Part3() {
    return (
			<form className='bg-primary/5 p-10 rounded-lg border border-solid border-white/5 shadow-lg'>
                <h1 className='text-7xl font-bold mb-5'>Login</h1>

                <input className={styles.field} type="text" placeholder="Enter email:" />

                <input className={styles.field} type="password" placeholder="Enter password" />

                <button className='bg-htmllessons-io inline-block'>Submit</button>
			</form>
		)
}