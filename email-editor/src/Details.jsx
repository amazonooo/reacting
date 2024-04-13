export function Details({ details, handleLoading }) {
    return (
			<>
				<h1>{details.title}</h1>
				<div>{details.descriprion}</div>
				<button onClick={handleLoading}>{details.buttonText}</button>
			</>
		)
}