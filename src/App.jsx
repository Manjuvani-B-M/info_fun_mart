import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage'
import LoginPortal from './Components/LoginPortal'
import LoginPage from './Components/LoginPage'


function App() {

  return (
    <>     
      <BrowserRouter>
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<LoginPage/>} path='/logingpage'/>
        <Route element={<LoginPortal />} path='/loginportal/*' />        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
