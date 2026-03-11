
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/AboutUs'
import Navigation from './component/common/Navigation'
import Home from './pages/Home'

function App() {
  
  return (
    <>
    <Navigation/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about-us' element={<AboutUs/>} />
  </Routes>
   
    </>
  )
}

export default App
