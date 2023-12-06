import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './views/Home'
import Contact from './views/Contact'
import Plans from './views/Plans'
import { Contexto } from './context/Contexto'
import { useContext } from 'react'

function App() {

  const {sesion} = useContext(Contexto)

  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={sesion === true ? <Contact></Contact> : <Plans></Plans>}></Route>
        <Route path="/plans/:id" element={<Plans></Plans>}></Route>
        <Route path="*" element={<h1>Ruta no válida</h1>}></Route>
      </Routes>
    </>
  )
}

export default App
