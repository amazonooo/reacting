import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import { Details } from '../src/Details'

export function App() 
  const [details, setDetails] = useState({
	isLoading: true,
	title: 'useEffect',
	descriprion: 'Hello, world!',
	buttonText: 'Click'
  })

  useEffect(() => {

  }, [])

  return (
		<div className={styles.layout}>
			<img src='./vite.svg' width={200} />

			{details.isLoading ? (
				<p>Loading...</p>
			) : (
			<Details details={details} setDetails=
			{setDetails} />
			)}
		</div>
	)
}