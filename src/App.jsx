import React from 'react'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details'
import Header from './Components/Header'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route  path='/details' element={<Details/>}/>
    </Routes>
    </>
   
  )
}
export default App