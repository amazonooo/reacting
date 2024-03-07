import logo from '/logo-name.svg'

export default function Header() {
    const now = new Date()

	return (
		<header>
            <img src={logo} alt="" />

			<span>Время сейчас: {now.toLocaleTimeString()}</span>
		</header>
	)
}
