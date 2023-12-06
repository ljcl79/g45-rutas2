import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const getStyle = ({isActive}) =>  (isActive ? "linkActivo" : "linkNormal");
  return (
    <div style={{backgroundColor:'gray', display:'flex', width:'100vw'}}>
        <NavLink to="/" className={getStyle}>Home</NavLink>
        <NavLink to="/contact" className={getStyle} >Contacto</NavLink>
        <NavLink to="/plans" className={getStyle} >Planes</NavLink>
    </div>
  )
}

export default Nav