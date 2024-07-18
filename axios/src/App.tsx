import { createContext } from 'react'
import './App.css'
import ComponentOne from './components/ComponentOne'

export const UserContext = createContext({})
export const ChannelContext = createContext({})

function App() {
  return (
		<div>
			<UserContext.Provider value={'amazonooo'}>
        <ChannelContext.Provider value={'Codevolution'}>
				  <ComponentOne />
        </ChannelContext.Provider>
			</UserContext.Provider>
		</div>
	)
}

export default App
