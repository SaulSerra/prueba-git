import React from 'react'
import '../styles/navbar.css'
import logo from '../assets/logo_syncnema.png'
import lupa_icon from '../assets/lupa_negra.png'
import perfil_icon from '../assets/perfil_icon.png'

const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='logo de la aplicacion de syncnema' className='logo'/>

      <ul>
        <li>Inicio</li>
        <li>Peliculas</li>
        <li>Series</li>
        <li>Sobre nosotros</li>
      </ul>

      <div className='search_box'>
        <input type='text' placeholder='Buscar' />
        <img src={lupa_icon} alt='icono de una lupa para la busqueda' className='search_icon'/>
      </div>

      <img src={perfil_icon} alt='icono de una persona para el perfil' className='perfil_icon'/>
    </div>
  )
}

export default NavBar