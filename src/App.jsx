import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
