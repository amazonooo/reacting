// в функции принимаем либо props, либо то, что нам нужно получить. Например title, description. Если props, тогда пишем например: {props.title}
export default function WayToTeach({ title, description }) {
	return (
		<li>
			<p>
				<strong>{title}</strong> {description}
			</p>
		</li>
	)
}
