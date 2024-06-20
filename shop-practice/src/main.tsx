import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './components/pages/home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Product from './components/pages/Product/Product'
import Cart from './components/pages/Cart/Cart'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './components/store/store'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<Router>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/cart' element={<Cart />}></Route>
						<Route path='/product/:id' element={<Product />}></Route>
					</Routes>
				</Router>
			</PersistGate>
		</Provider>
	</QueryClientProvider>
)
