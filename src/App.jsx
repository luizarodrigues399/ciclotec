import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Routers/Home'

import { Outlet } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <>
      <Header/>
        <Outlet />
      <Footer/>
    </>
  )
}

export default App
