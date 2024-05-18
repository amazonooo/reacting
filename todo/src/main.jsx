import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/screens/Home/Home.jsx'
import Layout from './components/layout/Layout.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Layout>
			<Home />
		</Layout>
	</React.StrictMode>
)
