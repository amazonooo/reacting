import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ShippingForm from "./components/ShippingForm/ShippingForm";

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<ShippingForm />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
