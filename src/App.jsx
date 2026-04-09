
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/AboutUs'
import Navigation from './component/common/Navigation'
import Home from './pages/Home'
import Sidebar from './component/common/sidebar'

function App() {
  
  return (
    <div className='h-[calc(100vh-24px)] p-3'>
    <Sidebar/>
    <div className='space-y-4 ps-[316px]'>
      <Navigation/>
        <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about-us' element={<AboutUs/>} />
        </Routes>
    </div>
   
    </div>
  )
}

export default App
