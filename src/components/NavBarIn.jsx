import React from 'react'
import { Link } from 'react-router-dom'

const NavBarIn = () => {
    
    
  return (
    <nav className='ContNav'>
        <div className='ContIcon'>
            <img className='Icon' src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1645997109/Personal/1163661_ynyb9c.png" alt="." />
        </div>
            <div className='ContLink'>
                <Link className='links' to='/home'>Inicio</Link>
                <Link className='links'to='/login/login' >Salir</Link>
            </div>
        
    </nav>
  )
}

export default NavBarIn