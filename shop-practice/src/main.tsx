import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './components/pages/home/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <Router>
            <Switch>
                <Route path='/cart'>
                    <Cart />
                </Route>
                <Route path='/product'>
                    <Product />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    </QueryClientProvider>
)
