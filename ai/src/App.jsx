import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Sponsors from './components/Sponsors/Sponsors'
import { ways } from './data'
import styles from './components/Advantages/Advantages.module.css'
import Volume from './components/Volume/Volume'
import Treatwell from './components/Treatwell/Treatwell'
import Demo from './components/Demo/Demo'
import Footer from './components/Footer/Footer'

function Advantages(props) {
	return (
		<>
			<section className={styles.advantages}>
				<div className={styles.advantages_inner}>
					<div className={styles.text_block}>
						<h1>{props.title}</h1>
						<h2>{props.description}</h2>
						<button>{props.button}</button>
					</div>
					<div className={styles.image_block}>
						<div className={styles.img}>
							<img src='./../public/first.png' alt='' />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

function App() {

  return (
		<>
		<Nav />
		<Header />
		<Sponsors />
		<Advantages title={ways[0].title} description={ways[0].description} button={ways[0].button} />
		<Advantages title={ways[1].title} description={ways[1].description} button={ways[1].button} />
		<Advantages title={ways[2].title} description={ways[2].description} button={ways[2].button} />
		<Volume />
		<Treatwell />
		<Demo />
		<Footer />
		</>
	)
}

export default App
