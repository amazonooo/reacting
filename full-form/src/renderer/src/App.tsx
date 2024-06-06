import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from './components/Form/Form'
import HomePage from './components/HomePage/HomePage'
import Info from './components/Info/Info'

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/card/:id" element={<Info />} />
      </Routes>
    </>
  )
}

export default App
