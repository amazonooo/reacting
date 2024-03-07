import Header from './components/Header'
import Button from './components/Button/Button'
import WayToTeach from './components/WayToTeach'
import { ways } from './data'

export default function App() {
  let content = 'Нажми на кнопку'

  function handleClick(type) {
    console.log('button clicked', type)
    content = type
  }
  function classToggle() {

  }
  return (
		<div>
			<Header />
			<main>
				<section>
					<h3>Наш подход к обучению</h3>

					<ul>
						{/* Или так, перебирая 4 штуки */}
						<WayToTeach
							title={ways[0].title}
							description={ways[0].description}
						/>

						{/* или так */}
						<WayToTeach {...ways[1]} />
						<WayToTeach {...ways[2]} />
						<WayToTeach {...ways[3]} />
					</ul>
				</section>
				<section>
					<h3>Чем мы отличаемся от других</h3>

					<Button onClick={() => handleClick('way')} classToggle={classToggle}>
						Подход
					</Button>
					<Button onClick={() => handleClick('easy')} classToggle={classToggle}>
						Доступность
					</Button>
					<Button
						onClick={() => handleClick('program')}
						classToggle={classToggle}
					>
						Концентрация
					</Button>

					<p>{content}</p>
				</section>
			</main>
		</div>
	)
}
