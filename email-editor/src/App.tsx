import { useRef, useState } from 'react'
import styles from './App.module.scss'
import { Details } from './Details'

export function App() { 
  const [details, setDetails] = useState({
	isLoading: false,
	title: 'useEffect',
	descriprion: 'Hello, world!',
	buttonText: 'Click'
  })

  const handleLoading = () => {
	setDetails(prev => ({...prev, isLoading: !prev.isLoading}))
  }

  return (
		<div className={styles.layout}>
			<img src='./vite.svg' width={200} className={styles.img} />
			{details.isLoading && <p>Loading...</p>}
			<Details details={details} handleLoading={handleLoading} />
		</div>
	)
}