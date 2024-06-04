import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import Info from './components/Info/Info';
import ShippingForm from "./components/ShippingForm/ShippingForm";

const App: React.FC = () => {

  return (
		<>
			<Routes>
				<Route path='/' element={<ShippingForm  />} />
				<Route path='/home' element={<HomePage  />} />
				{/* <Route path='/card' element={<>{data.map((card: CardData) => (
					<Card key={card.id} id={card.id} title={card.title} imageUrl={card.imgUrl} />
				))}</>} /> */}
				<Route path='/card/:id' element={<Info />} />
			</Routes>
		</>
	)
}

export default App
