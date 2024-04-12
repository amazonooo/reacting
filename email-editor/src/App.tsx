import { useState } from 'react'
import styles from './App.module.scss'
import { Details } from './Details'

export function App() {

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  return (
		<div className={styles.layout}>
			<img src='./vite.svg' width={200} />
			<Details title={title} text={text} setText={setText} setTitle={setTitle} />
		</div>
	)
}