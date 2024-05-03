import { useRef, useState } from 'react'
import styles from './App.module.scss'
import image from './assets/react.svg'
import Details from './Details'

export function App() {
  const [details, setDetails] = useState({
    isLoading: true,
    title: 'useEffect',
    description: 'Hello, World!',
    buttonText: 'Click'
  })

  const imageRef = useRef(null)

  const onClick = () => {
    imageRef.current.style.borderRadius = '20px'
    imageRef.current.style.boxShasow = '0 3px 6px rgba(0, 0, 0, 0.25)'
  }

  return (
		<div className={styles.layout}>
			<img ref={imageRef} src={image} width={250} className={styles.img} />
      <br />
			<button onClick={onClick}>Change image</button>

			{details.isLoading ? (
				<p>Loading...</p>
			) : (
				<Details details={details} setDetails={setDetails} />
			)}
		</div>
	)
}