export function Details({ title, setTitle }) {
    return (
        <>
            <h1>{title}</h1>
            <div>Hello, world!</div>
            <button onClick={() => setTitle('New title')}>Click</button>
        </>
    )
}