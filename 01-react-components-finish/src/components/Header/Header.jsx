import { useState } from 'react'
import logo from '/logo-name.svg'
import './Header.css'

export default function Header() {
  	const [now, setNow] = useState(new Date ())

	setInterval(() => setNow(new Date ()) ,1000)
	
	return (
		<header>
            <img src={logo} alt="" />

			<span>Время сейчас: {now.toLocaleTimeString()}</span>
		</header>
	)
}
