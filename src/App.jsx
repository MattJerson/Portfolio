import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/Navbar'
import Themes from './components/Themes'
import Contact from './pages/Contact/Contact'
import Portfolio from './pages/Portfolio/Portfolio'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    < Themes />
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='portfolio' element={<Portfolio/>}/>
      <Route path='Contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
