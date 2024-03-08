import Header from './components/Header'
import Button from './components/Button/Button'
import WayToTeach from './components/WayToTeach'
import { useState } from 'react'
import { ways, differences } from './data'

export default function App() {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
	setContentType(type)
  }

//   let tabContent = null

//   if (contentType) {
// 	tabContent = <p>{differences[contentType]}</p>
//   } else {
// 	tabContent = <p>Нажми на кнопку</p>
//   }

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

					<Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Подход</Button>
					<Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Доступность</Button>
					<Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Концентрация</Button>

					{/* 1 способ */}
					{/* { contentType ? <p>{differences[contentType]}</p> : <p>Нажми на кнопку</p>} */}

					{/* 2 способ */}
					{/* {!contentType ? <p>Нажми на кнопку</p> : null}
					{contentType ? <p>{differences[contentType]}</p> : null} */}

					{/* 3 способ */}
					{!contentType && <p>Нажми на кнопку</p>}
					{contentType && <p>{differences[contentType]}</p>}

					{/* 4 способ */}
					{/* {tabContent} */}

				</section>
			</main>
		</div>
	)
}
