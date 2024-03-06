import Header from './components/Header'
import { ways } from './data'
import Way from './components/WayToTeach'

function App() {
	return (
		<div>
			<Header />
			<main>
				<section>
					<h3>Наш подход к обучению</h3>
					<ul>
						{/* Или так */}
						<WayToTeach {...ways[0]} />
						<WayToTeach {...ways[0]} />
						<WayToTeach {...ways[0]} />
						{/* Или так */}
						<WayToTeach
							title={ways[3].title}
							description={ways[3].description}
						/>
					</ul>
				</section>
			</main>
		</div>
	)
}

export default App
